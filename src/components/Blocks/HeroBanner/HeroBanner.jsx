"use client";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function HeroBanner({ data }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "lightgray",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${data?.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "40px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          width: "300px",
          height: "auto",
          mr: "60px",
          position: "absolute",
        }}
      >
        <CardMedia
          image={data?.sideLogoImage}
          sx={{ height: "300px", width: "100%", objectFit: "cover" }}
        />

        <CardContent sx={{ height: "" }}>
          {data?.description && <Typography>{data?.description}</Typography>}
        </CardContent>
      </Card>
    </Box>
  );
}
