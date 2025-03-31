import React, { useState } from "react";
import { Box, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

// construct a component that will link to the cart page and is always floating in the upper right corner of the screen with a notifications badge.

export const CartLink = () => {
  //hover effect on the cart icon
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

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
        badgeContent={<Typography sx={{ color: "white" }}>0</Typography>}
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
