import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Counter } from "./Counter";
import { useCart } from "../store";

export const CartItem = ({ cookie }) => {
  const { removeFromCart } = useCart((state) => ({
    removeFromCart: state.removeFromCart,
  }));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "4px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h7">{cookie.name}</Typography>
      <Typography variant="body1">${cookie.price}</Typography>
      {/* add counter component below for quick edits */}
      <Counter quantity={cookie.quantity} />
      <Typography variant="body2">
        Total: ${(cookie.price * cookie.quantity).toFixed(2)}
      </Typography>
      {/* add remove button below */}
      <Button
        size="small"
        onClick={() => {
          // handle remove from cart
          removeFromCart(cookie.name);
          console.log(`Removing ${cookie.name} from cart`);
        }}
      >
        Remove
      </Button>
    </Box>
  );
};

export default CartItem;
