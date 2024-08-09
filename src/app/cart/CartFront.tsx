"use client";
import { useCart } from "@/hooks/useCart";
import React from "react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "@/components/Heading";
import truncate from "../../../utils/truncate";
//import Button from "@/components/Button";
import CartContent from "./CartContent";
import priceFormat from "../../../utils/priceFormat";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";

interface Props {
  currentUser: SafeUser | null;
}


const CartFront = ({currentUser} :Props) => {
  const router = useRouter();

  const { cartProducts, handleClearCart ,cartTotalAmount} = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex items-center flex-col">
        <div>
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">
              Your SkinFlux Cart is empty{" "}
            </h1>
          </div>
          <Link href={"/"}>
            <span className="text-rose-700">Start shopping</span>
            <MdArrowBack />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-16">
      <Heading title="YOUR SHOPPING CART "></Heading>
      <div className="grid grid-cols-5 text-xl gap-4 pb-4  mt-8 items-center font-bold mb-8">
        <div className="col-span-2 justify-self-start">Product Name</div>
        <div className="justify-self-start">Price</div>
        <div className="justify-self-start">Quantity</div>
        <div className="justify-self-end">Total</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <CartContent key={item.id} item ={item}/>;
          })}
      </div>

      <div className="flex justify-between">
        <div className="w-[90px] mr-8 mt-16 ">
          <Button onClick={()=>{handleClearCart()}} outline label="Clear Cart"  />
        </div>
        <div className="w-[90px]  mt-20 ">
            <Link className=" " href={"/"}> <MdArrowBack />CONTINUE SHOPPING</Link>
        </div>

        <div className="mt-40 ">
          <hr className="mb-4" />
          <div className="flex justify-between gap-1">
            <span className=" font-bold">SUBTOTAL</span>
            <span className="font-bold">{priceFormat(cartTotalAmount)}</span>
          </div>
          <div className="mb-8 mt-4">
            <p>
              Review your items before proceeding to payment.
            </p>
          </div>
          {/* <Button label={currentUser ? 'CHECKOUT' : 'LOGIN TO CHECKOUT'} 
           outline = {currentUser ? false : true}
          onClick={() => {currentUser ? router.push('/checkout') : router.push('/sign-in')}} 
          /> */}

          <div>
            {currentUser ? (
              <a href="/checkout">
                <span className="bg-slate-500 text-white font-bold py-2 px-4 rounded">
                  Proceed to Checkout
                </span>
              </a>
            ) : (
              <a href="/sign-in">
                <span className="bg-slate-500 text-white font-bold py-2 px-4 rounded">
                  Login to Checkout
                </span>
              </a>
            )}
          </div>
          

          

        </div>
      </div>
    </div>
  );
};

export default CartFront;
