"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/dist/client/components/navigation";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Button from "@/components/Button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutClient = () => {
  const router = useRouter();
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  console.log("PAY INTE", paymentIntent);
  console.log("client SECRETE", clientSecret);

  useEffect(() => {
    if (cartProducts) {
      setLoading(true);
      setError(false);
      fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts,
          payment_intent_id: paymentIntent,
        }),
      })
        .then((response) => {
          setLoading(false);
          if (response.status === 401) {
            return router.push("/sign-in");
          }
          return response.json();
        })
        .then((data) => {
          if (!data || !data.paymentIntent) {
            throw new Error("Invalid response from server");
          }
          setClientSecret(data.paymentIntent.client_secret);
          handleSetPaymentIntent(data.paymentIntent.id);
        })
        .catch((error) => {
          setError(true);
          //console.log("Error", error);
          toast.error("Something went wrong. Please try again");
        });
    }
  }, [cartProducts, paymentIntent, handleSetPaymentIntent, router]);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  const handleSetPaymentSuccess = useCallback((value: boolean) => {
    setPaymentSuccess(value);
  }, []);

  return (
    <div className="w-full">
      {/* !paymentSuccess &&  */}
      {clientSecret && cartProducts && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            clientSecret={clientSecret}
            handleSetPaymentSuccess={handleSetPaymentSuccess}
          />
        </Elements>
      )}
      {loading && <div className="text-center">Loading checkout..</div>}
      {error && (
        <div className="text-center text-rose-600">
          Something went wrong please try again.
        </div>
      )}
      {paymentSuccess && (
        <div className="flex items-center flex-col gap-4">
          <div className="text-teal-500 text-center">Payment success</div>
          <div className="max-w-[200px] w-full">
            {/* <Button
              label="View Your Orders"
              onClick={() => router.push("/order")}
            /> */}
            <a className=" rounded-md hover:opacity-80 transition w-full border-slate-700 flex item-center
             justify-center gap-0" href="/orders">View Your Orders</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutClient;

