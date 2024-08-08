'use client';

import { CartContextProvider } from "@/hooks/useCart";
import { ReactNode } from "react";

interface CartProviderProps{
    children: ReactNode
}

import React from 'react'

const CartProvider = ({children} :CartProviderProps) => {
  return (
    <CartContextProvider>{children}</CartContextProvider>
  )
}

export default CartProvider
