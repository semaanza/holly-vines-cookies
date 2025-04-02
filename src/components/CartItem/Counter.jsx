import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";

export const Counter = ({ quantity, decreaseQuantity, increaseQuantity }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton onClick={decreaseQuantity}>-</IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={increaseQuantity}>+</IconButton>
    </Box>
  );
};
export default Counter;
