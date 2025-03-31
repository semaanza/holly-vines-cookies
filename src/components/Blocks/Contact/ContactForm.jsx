import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";
import { useState } from "react";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSnackbar({
            open: true,
            message: "Email successfully sent!",
            severity: "success",
          });
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          setSnackbar({
            open: true,
            message: "Failed to send email.",
            severity: "error",
          });
        }
      );
  };

  const fieldStyle = {
    mb: "10px",
    width: "75%",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",
    },
  };

  const labelSytle = {
    color: "primary.main",
    width: "75%",
    textAlign: "start",
  };

  const boxStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
      <form
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Box sx={boxStyle}>
            <Typography sx={labelSytle} variant="body1">
              Full Name
            </Typography>
            <TextField
              sx={fieldStyle}
              hiddenLabel
              size="small"
              variant="outlined"
              id="name"
              {...register("fullName", { required: "Full Name is required" })}
              error={!!errors.fullName}
              helperText={errors.fullName ? errors.fullName.message : ""}
            />
          </Box>
          <Box sx={boxStyle}>
            <Typography sx={labelSytle} variant="body1">
              Phone Number
            </Typography>
            <TextField
              sx={fieldStyle}
              hiddenLabel
              size="small"
              variant="outlined"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid phone number",
                },
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
            />
          </Box>
          <Box sx={boxStyle}>
            <Typography sx={labelSytle} variant="body1">
              Email
            </Typography>
            <TextField
              sx={fieldStyle}
              hiddenLabel
              size="small"
              variant="outlined"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          </Box>
          <Box sx={boxStyle}>
            <Typography sx={labelSytle} variant="body1">
              Order
            </Typography>
            <TextField
              sx={fieldStyle}
              hiddenLabel
              variant="outlined"
              id="order"
              multiline
              minRows={5}
              maxRows={20}
              {...register("order", { required: "Order is required" })}
              error={!!errors.order}
              helperText={errors.order ? errors.order.message : ""}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ color: "white" }}
          >
            Start Baking!!
          </Button>
        </Box>
      </form>
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
