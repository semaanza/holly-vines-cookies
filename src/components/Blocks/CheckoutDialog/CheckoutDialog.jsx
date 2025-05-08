import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const fieldStyle = {
  mb: "15px",
  width: "75%",
  borderRadius: "5px",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
  },
};

export const CheckoutDialog = ({
  snackbar,
  open,
  handleClose,
  totalPrice,
  cartItems,
}) => {
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const phoneNumberValue = watch("phoneNumber", "");

  const onSubmit = async (data) => {
    const allData = {
      ...data,
      totalPrice: totalPrice,
      cartItems: cartItems,
    };

    emailjs
      .send("service_kvul08f", "template_1h06knr", allData, {
        publicKey: "user_CiIzsIwsiSbTO05sBgSFA",
      })
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          snackbar({
            open: true,
            message: "Email successfully sent!",
            severity: "success",
          });
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          snackbar({
            open: true,
            message: "Failed to send email.",
            severity: "error",
          });
        }
      );
    reset();
    handleClose();
  };

  const handlePhoneInput = (e) => {
    const input = e.target.value;
    if (input.length > 14) return;
    const formattedValue = formatPhoneNumber(input);
    setValue("phoneNumber", formattedValue, { shouldValidate: true });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: "form",
          onSubmit: onSubmit,
        },
      }}
    >
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <DialogContentText mb={2}>
          Please provide your contact information to complete the order.
        </DialogContentText>
        <TextField
          sx={fieldStyle}
          label="Full Name"
          {...register("fullName", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Full Name must be at least 3 characters long",
            },
          })}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
        />
        <TextField
          label="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={fieldStyle}
        />
        <TextField
          label="Phone Number"
          value={phoneNumberValue}
          {...register("phoneNumber", {
            required: "Phone Number is required",
            max: 14,
            maxLength: {
              value: 14,
              message: "Phone Number must be 14 characters long",
            },
            pattern: {
              value: /^\(\d{3}\) \d{3}-\d{4}$/,
              message: "Invalid phone number. Use (XXX) XXX-XXXX format",
            },
          })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
          sx={fieldStyle}
          onChange={handlePhoneInput}
        />
        <TextField
          label="Special Instructions"
          multiline
          rows={4}
          {...register("message", {})}
          error={!!errors.message}
          helperText={errors.message?.message}
          sx={fieldStyle}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckoutDialog;
