"use client";
import React, { useState } from "react";
import { Box, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../../store/store";

export const CartLink = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const totalItems = useCart((state) => state.cart.length || 0);

  return (
    <Box
      aria-label="cart"
      role="button"
      height="50px"
      width="50px"
      href="/cart"
      component="a"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "fixed",
        top: "90px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        backgroundColor: hover ? "primary.main" : "white",
        transition: "background-color 0.3s ease",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        padding: "10px",
        opacity: 0.9,
      }}
    >
      <Badge
        badgeContent={
          <Typography sx={{ color: "white" }}>{totalItems}</Typography>
        }
        color="primary"
      >
        <ShoppingCart
          sx={{
            display: "flex",
            fontSize: "2rem",
            color: hover ? "white" : "primary.main",
            transition: "color 0.3s ease",
          }}
        />
      </Badge>
    </Box>
  );
};

export default CartLink;
