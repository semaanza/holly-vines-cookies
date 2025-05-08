import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export const Counter = ({ quantity, decreaseQuantity, increaseQuantity }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <IconButton onClick={decreaseQuantity} disableRipple>
        <Remove />
      </IconButton>
      <Typography>{quantity}</Typography>
      <IconButton onClick={increaseQuantity} disableRipple>
        <Add />
      </IconButton>
    </Box>
  );
};
export default Counter;
