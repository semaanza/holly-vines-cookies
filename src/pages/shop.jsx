"use client";
import React from "react";
import { Box } from "@mui/material";
import { ShopCookieCardSection } from "../components";
import shopData from "../../content/page/shop.json";

export default function Shop() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          mb: "100px",
          // mt: { xs: "50px", sm: "75px" },
          padding: "30px",
        }}
      >
        <ShopCookieCardSection {...shopData} />
      </Box>
    </>
  );
}
