// src/hooks/useCart.ts

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  price: number;
  image: string;
};

type CartContextType = {
  cartTotalAmount: number;
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;

  paymentIntent: string | null;
  handleSetPaymentIntent: (val: string | null) =>void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  console.log("quantity", cartTotalQty);
  console.log("Amount", cartTotalAmount);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("SkinFluxCartItems");
    const cartProducts2: CartProductType[] | null = JSON.parse(cartItems);

    const skinPaymentIntent: any = localStorage.getItem("skinPaymentIntent");
    const paymentIntent: string | null = JSON.parse(skinPaymentIntent);

    setCartProducts(cartProducts2);

    setPaymentIntent(paymentIntent); 
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;
            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );
        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };
    getTotals();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Product added to Cart");
      localStorage.setItem("SkinFluxCartItems", JSON.stringify(updatedCart));

      return updatedCart;
    });
  }, []);

  const handleRemoveFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id != product.id;
        });
        setCartProducts(filteredProducts);
        toast.success("Product removed from Cart");
        localStorage.setItem(
          "SkinFluxCartItems",
          JSON.stringify(filteredProducts)
        );
      }
    },
    [cartProducts]
  );

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 100) {
        return toast.error("Maximum reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        // toast.success("Product removed from Cart");
        localStorage.setItem("SkinFluxCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );
  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;
      if (product.quantity === 1) {
        return toast.error("Minimum reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }

        setCartProducts(updatedCart);
        // toast.success("Product removed from Cart");
        localStorage.setItem("SkinFluxCartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem("SkinFluxCartItems", JSON.stringify(null));
  }, [cartProducts]);


  const handleSetPaymentIntent = useCallback((val: string | null) =>{
    setPaymentIntent(val)
    localStorage.setItem("skinPaymentIntent", JSON.stringify(val))
  },[paymentIntent])


  const value: CartContextType = {
    cartTotalAmount,
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,

    paymentIntent,
    handleSetPaymentIntent,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("Use useCart within a CartContextProvider");
  }
  return context;
};
