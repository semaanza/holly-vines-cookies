import React from "react";
import { Box, Typography } from "@mui/material";
import { HowWeWorkCard } from "./HowWeWorkCard";

export const HowWeWork = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        mb: "100px",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", mb: "10px", fontWeight: "bold" }}
      >
        How We Work
      </Typography>
      <Typography variant="h7" sx={{ textAlign: "center", mb: "30px" }}>
        Your path to delicious treats explained
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <HowWeWorkCard
          title="Choose Cookies"
          step="Step 1"
          image="https://picsum.photos/id/13/800/600"
          description="lCulpa ullamco veniam nulla"
        />
        <HowWeWorkCard
          title="Choose Cookies"
          step="Step 1"
          image="https://picsum.photos/id/13/800/600"
          description="lCulpa ullamco veniam nulla"
        />{" "}
        <HowWeWorkCard
          title="Choose Cookies"
          step="Step 1"
          image="https://picsum.photos/id/13/800/600"
          description="lCulpa ullamco veniam nulla"
        />
      </Box>
    </Box>
  );
};
