import React from "react";
import { Box, Typography } from "@mui/material";

export const HowWeWorkCard = ({ image, step, title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        m: "10px",
        mb: { xs: "20px", sm: "10px" },
      }}
    >
      <Box
        component="img"
        src={image}
        sx={{
          display: "flex",
          objectFit: "cover",
          width: "200px",
          height: "200px",
          p: "4px",
          borderRadius: "10%",
        }}
      />
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {step}
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Typography sx={{ textAlign: "center" }}>{description}</Typography>
    </Box>
  );
};
