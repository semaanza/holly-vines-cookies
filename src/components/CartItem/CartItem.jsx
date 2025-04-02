import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Counter } from "./Counter";
import { useCart } from "../../store";

export const CartItem = ({ cookie }) => {
  const [quantity, setQuantity] = useState(cookie.quantity);
  const removeItem = useCart((store) => store.removeItem);
  const increaseQuantity = useCart((store) => store.increaseQuantity);
  const decreaseQuantity = useCart((store) => store.decreaseQuantity);

  const cookiePriceTotal = (cookie.quantity * 6 * cookie.price).toFixed(2);

  useEffect(() => {
    setQuantity(cookie.quantity);
  }, [cookie.quantity]);

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
      <Typography variant="body1">${cookie.price.toFixed(2)}</Typography>
      {/* add counter component below for quick edits */}
      <Counter
        quantity={quantity * 6}
        // onClick={() => decreaseItemQuantity(cartItem.name)}

        increaseQuantity={() => increaseQuantity(cookie)}
        decreaseQuantity={() => decreaseQuantity(cookie)}
      />
      <Typography variant="body2">Total: ${cookiePriceTotal}</Typography>
      <Button size="small" onClick={() => removeItem(cookie)}>
        Remove
      </Button>
    </Box>
  );
};

export default CartItem;
