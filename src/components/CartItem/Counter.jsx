import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";

export const Counter = ({ quantity, setQuantity }) => {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton onClick={handleDecrement}>-</IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={handleIncrement}>+</IconButton>
    </Box>
  );
};
export default Counter;
