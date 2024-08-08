"use client";

import { useCart } from "@/hooks/useCart";
import React, { useEffect, useState } from "react";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import priceFormat from "../../../utils/priceFormat";
import toast from "react-hot-toast";
import Button from "@/components/Button";

interface CheckoutProps {
  clientSecret: string;
  handleSetPaymentSuccess: (value: boolean) => void;
}
const CheckoutForm = ({
  clientSecret,
  handleSetPaymentSuccess,
}: CheckoutProps) => {
  const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
    useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const formattedPrice = priceFormat(cartTotalAmount);

  useEffect(() => {
    if (!stripe || !clientSecret) {
      return;
    }
    handleSetPaymentSuccess(false);
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        if (!result.error) {
          toast.success("Checkout success");

          handleSetPaymentSuccess(true);
          handleSetPaymentIntent(null);
          handleClearCart();
        }
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="payment-form"
      className="mb-2  max-w-lg mx-auto   bg-gray-300 p-2 rounded-md"
    >
      <h1 className="text-3xl font-bold text-center mb-2">Payment</h1>
      <AddressElement
        options={{ mode: "shipping", allowedCountries: ["KE", "US", "CA"] }}
      />
      <p className="text-center mb-4 text-gray-600">
        Please enter your payment details below to proceed.
      </p>

      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />

      <h1 className="text-3xl font-bold text-center mb-6">
        TOTAL {formattedPrice}
      </h1>
      <Button
        label={loading ? "Processing" : "Pay Now"}
        disabled={loading || !stripe || !elements}
        onClick={() => {}}
      />
    </form>
  );
};

export default CheckoutForm;

