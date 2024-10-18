import { Box } from "@mui/material";
import React from "react";
import CookieCard from "./CookieCard";

export const CookieCardSection = (props) => {
  const {
    data: { cookieCards },
  } = props;
  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "#B2AC88",
      }}
    >
      {cookieCards?.map((card, i) => (
        <CookieCard key={i} {...card} />
      ))}
    </Box>
  );
};
