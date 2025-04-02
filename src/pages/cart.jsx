import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { CartItem } from "@/components/CartItem";
import { useCart } from "../store";

export default function cart() {
  const cartItems = useCart((state) => state.cart);
  console.log("cartItems", cartItems);

  const clearCart = useCart((state) => state.clearCart);
  const getTotalItems = useCart((state) => state.getTotalItems);
  const getTotalPrice = useCart((state) => state.getTotalPrice);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalItems(getTotalItems());
    setTotalPrice(getTotalPrice());
  }, [cartItems, getTotalItems, getTotalPrice]);

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Cart</h1>
      <Box>
        <h2>Cookies in your cart:</h2>
        {/* probably a good spot to add disclaimers about the amount of cookies and pricing per half dozen */}

        {/* map through cart items */}
        {cartItems?.length ? (
          cartItems.map((cookie, i) => <CartItem key={i} cookie={cookie} />)
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          alignItems: "center",
          height: "100%",
          marginTop: "1rem",
          padding: "1rem",
          height: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: { xs: "100%", sm: "33%" },
          }}
        >
          <h4>Total:</h4>
          <h4>${totalPrice.toFixed(2)}</h4>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              // handle checkout
              console.log("Checking out");
            }}
          >
            Checkout
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              // handle clear cart
              console.log("Clearing cart");
              clearCart();
            }}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
