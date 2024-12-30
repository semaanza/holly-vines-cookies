import { Box, Typography, Button } from "@mui/material";
import React from "react";

export const LatestCookieSection = ({
  imgSource,
  title,
  description,
  reverse,
}) => {
  const flexDirection = reverse ? "row-reverse" : "row";
  return (
    <Box
      sx={{
        height: { xs: "auto", sm: "500px" },
        width: { xs: "100%", sm: "80%" },
        display: "flex",
        alignItems: "center",
        flexDirection: flexDirection,
        padding: "30px",
        flexWrap: "wrap",
        mb: { xs: "20px", sm: "20px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", sm: "50%" },
          padding: "20px",
          height: "100%",
        }}
      >
        <Box
          component="img"
          src={imgSource}
          alt={title}
          sx={{
            borderRadius: "20px",
            objectFit: "cover",
            width: { xs: "100%", sm: "100%" },
            height: "100%",
          }}
        />
      </Box>
      <Box
        //TODO:if reverse is true, align items to the end, else align items to the start
        sx={{
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: reverse ? "start" : "end" },
          padding: "20px",
        }}
      >
        <h2>{title}</h2>
        <Typography sx={{ mb: "20px" }}>{description}</Typography>
        <Button variant="contained">Order Now</Button>
      </Box>
    </Box>
  );
};
