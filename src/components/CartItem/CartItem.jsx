import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Counter } from "./Counter";
import { useCart } from "../../store";

export const CartItem = ({ cookie }) => {
  const [quantity, setQuantity] = useState(cookie.quantity);
  const removeItem = useCart((store) => store.removeItem);
  const increaseQuantity = useCart((store) => store.increaseQuantity);
  const decreaseQuantity = useCart((store) => store.decreaseQuantity);

  const cookiePriceTotal = (cookie.quantity * 6 * cookie.price).toFixed(2);
  {
    /* sx={{
        display: "flex",
        flexDirection: "row",
        padding: "4px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
      }} */
  }
  useEffect(() => {
    setQuantity(cookie.quantity);
  }, [cookie.quantity]);

  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ccc",
        mb: "10px",
        padding: "4px",
        borderRadius: "8px",
      }}
    >
      <Grid item xs={2}>
        <Typography variant="h7">{cookie.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1">${cookie.price.toFixed(2)}</Typography>
      </Grid>
      {/* add counter component below for quick edits */}
      <Grid item xs={2}>
        <Counter
          quantity={quantity * 6}
          increaseQuantity={() => increaseQuantity(cookie)}
          decreaseQuantity={() => decreaseQuantity(cookie)}
        />
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="body2">${cookiePriceTotal}</Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => removeItem(cookie)}>Remove</Button>
      </Grid>
    </Box>
  );
};

export default CartItem;
