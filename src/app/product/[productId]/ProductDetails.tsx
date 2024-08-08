"use client";
import { Rating } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import SetQuantity from "@/components/products/SetQuantity";
import Button from "@/components/Button";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/dist/client/components/navigation";
import priceFormat from "../../../../utils/priceFormat";

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  price: number;
  image: string;
};

interface Props {
  product: any;
}

const ProductDetails = ({ product }: Props) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    quantity: 1,
    price: product.price,
    image: product.image,
  });

  const router = useRouter();

  console.log(cartProducts);
  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const ratingProduct =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleQtyDecrease = useCallback(() => {
    setCartProduct((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }));
  }, [cartProduct]);

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-40">
      <div className=" m-auto mt-0 ">
        <img
          src={product.image}
          alt={product.name}
          className="h-50 max-w-80 object-contain"
        />
      </div>
      <div>
        <div className="mb-4">
          <h1 className="text-2xl">{product.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Rating value={ratingProduct} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Hr />
        <div className="font-bold mt-3">PRICE: {priceFormat(product.price)}</div>
        <h5 className="mt-8 font-bold">PRODUCT DESCRIPTION</h5>
        <div className="text-justify mt-8">{product.description}</div>
        <div className="mt-4 mb-16">
          <span className="font-semibold">CATEGORY: </span>
          <span>{product.category}</span>
        </div>

        {isProductInCart ? (
          <>
            <p className="mb-3 flex items-center text-slate-500">
              <span>PRODUCT ADDED TO CART</span>
              <MdCheckCircle size={20} className="text-rose-200" />
            </p>
            <div>
              <Button
                label="VIEW CART"
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <SetQuantity
                cartProduct={cartProduct}
                handleQtyDecrease={handleQtyDecrease}
                handleQtyIncrease={handleQtyIncrease}
              />
            </div>
            <div className="mt-8 max-w-[300px]">
              <Button
                label="ADD TO CART"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

const Hr = () => {
  return <hr className="w-[30%] my-2" />;
};
