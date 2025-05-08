import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export const CartItemHeading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px",
        fontWeight: "bold",
      }}
    >
      <Grid item xs={2}>
        <Typography variant="h7">Cookie</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h7">Price</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="h7"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Quantity
        </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h7">Total</Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      ></Grid>
    </Box>
  );
};

export default CartItemHeading;
