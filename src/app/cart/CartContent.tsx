import React from "react";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import priceFormat from "../../../utils/priceFormat";
import Link from "next/link";
import Image from "next/image";
import truncate from "../../../utils/truncate";
import SetQuantity from "@/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
interface CartContentProps {
  item: CartProductType;
}
const CartContent = ({ item }: CartContentProps) => {
  const { handleRemoveFromCart, handleCartQtyIncrease, handleCartQtyDecrease } =
    useCart();

  const formattedImageUrl = data.image
    .replace("www.dropbox.com", "dl.dropboxusercontent.com")
    .replace("?dl=1", ""); // Remove the query parameter if it exists

  
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 borader-t-[1.5px] border-slate-200 py-1 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square ">
            <Image
              src={formattedImageUrl} 
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-self-start">
          <Link href={`/product/${item.id}/`}>{truncate(item.name)}</Link>
          <div>
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="text-rose-700 underline mt-4"
            >
              Remove Item from Cart
            </button>
          </div>
        </div>
      </div>
      <div>{priceFormat(item.price)}</div>
      <div>
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => handleCartQtyIncrease(item)}
          handleQtyDecrease={() => handleCartQtyDecrease(item)}
        />
      </div>
      <div className="justify-self-end">
        {priceFormat(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default CartContent;
