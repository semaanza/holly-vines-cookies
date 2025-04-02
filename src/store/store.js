import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (cookie) => {
        const { cart } = get();
        console.log("cart", cart);
        const updatedCart = addCookie(cart, cookie);
        set({ cart: updatedCart });
      },
      removeItem: (cookie) => {
        const cart = get().cart;
        console.log("removeItemFromCart", cookie);
        const id = cookie.id;
        set({ cart: cart.filter((item) => item.id !== id) });
      },
      clearCart: () => {
        set({ cart: [] });
      },
      increaseQuantity: (cookie) => {
        const cart = get().cart;
        const updatedCart = cart.map((item) =>
          item.id === cookie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        set({ cart: updatedCart });
      },
      decreaseQuantity: (cookie) => {
        const cart = get().cart;
        if (cookie.quantity === 1) {
          return;
        }
        const updatedCart = cart.map((item) =>
          item.id === cookie.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        set({ cart: updatedCart });
      },
      getTotalItems: () => {
        const cart = get().cart;
        return cart.reduce((acc, item) => acc + item.quantity * 6, 0);
      },
      getTotalPrice: () => {
        const cart = get().cart;
        return cart.reduce(
          (acc, item) => acc + item.price * (item.quantity * 6),
          0
        );
      },
    }),
    {
      name: "cookie-cart", // name of the item in the storage (must be unique)
    }
  )
);

const addCookie = (cart, cookie) => {
  console.log(cookie, "cookie");
  const existingItem = cart.find((item) => item.id === cookie.id);
  if (existingItem) {
    return cart.map((item) =>
      item.id === cookie.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cart, { ...cookie, quantity: 1 }];
  }
};
