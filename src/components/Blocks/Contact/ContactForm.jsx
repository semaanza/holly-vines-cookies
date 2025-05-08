import { useState } from "react";
import { Box, Snackbar, Alert } from "@mui/material";
import { Form } from "./Form";

export const ContactForm = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="contactForm"
      sx={{
        padding: "16px",
        width: { xs: "100%", sm: "40%" },
        backgroundColor: "secondary.light",
        height: { xs: "100vh", sm: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form snackbar={setSnackbar} />
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
    </Box>
  );
};
