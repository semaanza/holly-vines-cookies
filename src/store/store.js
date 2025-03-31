import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCookieCart = create()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (name, price) => {
        const { cart } = get();
        const updatedCart = addToCart(cart, name, price);
        set({ cart: updatedCart });
      },
      removeFromCart: (id) => {
        const cart = get().cart;
        set({ cart: cart.filter((item) => item.id !== id) });
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cookie-cart", // name of the item in the storage (must be unique)
    }
  )
);

const addCookie = (cookie) => {
  const cart = useCookieCart.getState().cart;
  const item = cart?.find((item) => item.name === cookie.name);
  if (item) {
    return cart.map((item) => {
      if (item.name === cookie.name) {
        const itemQuantity = item.quantity >= 1 ? item.quantity : 1;
        return { ...item, quantity: itemQuantity };
      }
      return item;
    });
  }
  return [...cart, { item, quantity: 1, name: cookie.name, price: price }];
};
const removeCookie = (id) => {
  const cart = useCookieCart.getState().cart;
  useCookieCart.setState({ cart: cart.filter((item) => item.id !== id) });
};
const clearCart = () => {
  useCookieCart.setState({ cart: [] });
};
const getCart = () => {
  return useCookieCart.getState().cart;
};
// const getTotalItems = () => {
//   const cart = useCookieCart.getState().cart;
//   return cart.reduce((acc, item) => acc + item.quantity, 0);
// };
// const getTotalPrice = () => {
//   const cart = useCookieCart.getState().cart;
//   return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// };
