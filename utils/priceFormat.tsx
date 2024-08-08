import React from "react";
import style from "styled-jsx/style";

const priceFormat = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export default priceFormat;
