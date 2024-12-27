"use client";
import React, { useEffect } from "react";
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
          mt: "100px",
          padding: "30px",
        }}
      >
        <ShopCookieCardSection {...shopData} />
      </Box>
    </>
  );
}
