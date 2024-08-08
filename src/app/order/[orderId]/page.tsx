import React from "react";
import Container from "@/components/Container";

import getOrderById from "@/actions/getOrderById";
import OrderDetails from "./OrderDetails";

interface Iparams {
  orderId?: string;
}

const Order= async ({ params }: { params: Iparams }) => {

    const order =  await getOrderById(params)

    if(!order) return <div>NO ORDER</div>
  return (
    <div>
      <Container>
        <OrderDetails order={order} />
        
      </Container>
    </div>
  );
};

export default Order;
