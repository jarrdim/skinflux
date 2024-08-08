import React from "react";
import CheckoutClient from "./CheckoutClient";
import Wrap from "@/components/Wrap";
import Container from "@/components/Container";

const Checkout = () => {
  return (
    <div className="p-8">
      <Container>
        <Wrap>
          <CheckoutClient />
        </Wrap>
      </Container>
    </div>
  );
};

export default Checkout;
