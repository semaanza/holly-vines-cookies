import { Box } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box sx={{ height: "auto", backgroundColor: "lightgray" }}>
      <Box sx={{ p: "10px", width: "100%", height: "50%" }}>social links</Box>
      <Box sx={{ p: "10px", width: "100%", height: "50%" }}>copy right</Box>
    </Box>
  );
};
