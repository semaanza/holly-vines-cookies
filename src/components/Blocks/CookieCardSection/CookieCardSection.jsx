import { Box } from "@mui/material";
import React from "react";
import CookieCard from "./CookieCard";

export default function CookieCardSection(props) {
  const {
    data: { cookieCards },
  } = props;
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      {cookieCards?.map((card, i) => (
        <CookieCard key={i} {...card} />
      ))}
    </Box>
  );
}
