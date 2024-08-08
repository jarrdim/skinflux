"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartProductCount = () => {
  const router = useRouter();
  const { cartTotalQty } = useCart();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="relative cursor-pointer flex"
    >
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <span className="top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm">
        {cartTotalQty}
      </span>
      
    </div>
  );
};

export default CartProductCount;
