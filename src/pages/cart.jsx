import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Snackbar, Alert } from "@mui/material";
import { CartItem, CartItemHeading } from "@/components/CartItem";
import { useCart } from "../store";
import { CheckoutDialog } from "../components";

export default function cart() {
  const cartItems = useCart((state) => state.cart);

  const clearCart = useCart((state) => state.clearCart);
  const getTotalItems = useCart((state) => state.getTotalItems);
  const getTotalPrice = useCart((state) => state.getTotalPrice);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    setTotalItems(getTotalItems());
    setTotalPrice(getTotalPrice());
  }, [cartItems, getTotalItems, getTotalPrice]);

  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Cart</h1>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        <h2>Cookies in your cart:</h2>
        {/* probably a good spot to add disclaimers about the amount of cookies and pricing per half dozen */}

        {/* map through cart items */}
        <CartItemHeading />
        {cartItems?.length ? (
          cartItems.map((cookie, i) => <CartItem key={i} cookie={cookie} />)
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          alignItems: "center",
          height: "100%",
          marginTop: "1rem",
          padding: "1rem",
          height: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: { xs: "100%", sm: "33%" },
          }}
        >
          <h4>Total:</h4>
          <h4>${totalPrice.toFixed(2)}</h4>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              setOpen(true);
              console.log("Opening checkout dialog");
            }}
          >
            Checkout
          </Button>
          <CheckoutDialog
            totalPrice={totalPrice}
            cartItems={cartItems}
            open={open}
            handleClose={handleClose}
            snackbar={setSnackbar}
          />
          <Snackbar
            open={snackbar.open}
            autoHideDuration={2000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            key={"bottom" + "center"}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              // handle clear cart
              console.log("Clearing cart");
              clearCart();
            }}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
