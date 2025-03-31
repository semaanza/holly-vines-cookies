import React from "react";
import { Box, Button } from "@mui/material";
import { CartItem } from "@/components/CartItem";
import { useCart } from "../store";

export default function cart() {
  const { cookieCart, total } = useCart((state) => ({
    cookieCart: state.cookieCart,
    total: state.total,
  }));

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
        {cookieCart.map((cookie, i) => (
          <CartItem key={i} cookie={cookie} />
        ))}
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
          <h5>Total:</h5>
          <h5>{total}</h5>
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
              // clearCart();
            }}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
