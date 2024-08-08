// import { NextApiRequest, NextApiResponse } from "next";
// import { buffer } from "stream/consumers";
// import Stripe from "stripe";

// export const config = {
//     api: {
//         bodyParser: false
//     }
// }

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { 
//     apiVersion: "2024-06-20",
// });

// export default async function  handler(req:NextApiRequest,
//     res:NextApiResponse
// ){
//     const buff= await buffer(req)
//     const sig = req.headers['stripe-signature']

//     if(!sig)
//         {
//             return res.status(400).send("Missing stripe signature")
//         }

//         let event: Stripe.Event;

//         try{
//             event = stripe.webhooks.constructEvent(
//                 buff, sig, process.env.STRIPE_WEBHOOK_SECRET!
//             )
//         }
//         catch(err)
//         {
//             return res.status(400).send("WebHook error "+ err)
//         }

//         switch(event.type)
//         {
//             case 'charge.succeeded':
//                 const charge: any = event.data.object as Stripe.Charge

//                 if(typeof charge.payment_intent === 'string')
//                     {
//                         await prisma?.order.update({
//                             where: {paymentItentId: charge.payment_intent},
//                             data: {status: 'complete', address: charge.shipping?.address}
//                         })
//                     }
//                 break
//                 default:
//                     console.log("EVENT TO HANDLED")
//         }

//         res.json({received: true})
// }

// src/pages/api/stripe-webhook.ts

// src/pages/api/stripe-webhook.ts

import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "stream/consumers";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false,
    },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-06-20",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Webhook received");

    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    if (!sig) {
        console.error("Missing stripe signature");
        return res.status(400).send("Missing stripe signature");
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
        console.log("Event constructed:", event);
    } catch (err) {
        console.error("Webhook error:", err);
        return res.status(400).send("Webhook error: " + err);
    }

    try {
        switch (event.type) {
            case 'charge.succeeded':
                const charge = event.data.object as Stripe.Charge;
                const paymentIntentId = charge.payment_intent;

           
                if (typeof paymentIntentId === 'string') {
                    const order = await prisma.order.update({
                        where: { paymentItentId: paymentIntentId },
                        data: {
                            status: 'complete',
                            address: {
                                city: charge.shipping?.address?.city ?? "N/A",
                                country: charge.shipping?.address?.country ?? "N/A",
                                line1: charge.shipping?.address?.line1 ?? "N/A",
                                // line2: charge.shipping?.address?.line2 ?? null,
                                postal_code: charge.shipping?.address?.postal_code ?? "N/A",
                                state: charge.shipping?.address?.state ?? "N/A",
                            },
                        },
                    });

                    if (!order) {
                        console.error("Order not found for Payment Intent ID:", paymentIntentId);
                    } else {
                        console.log("Order updated:", order);
                    }
                }
                break;
            default:
                console.log("Unhandled event type:", event.type);
        }

        res.json({ received: true });
    } catch (err) {
        console.error("Error handling event:", err);
        res.status(500).send("Server error: " + err);
    }
}
