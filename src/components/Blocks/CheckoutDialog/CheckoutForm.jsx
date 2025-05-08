import React from "react";
import { useForm } from "react-hook-form";
import { DialogActions, TextField, Button } from "@mui/material";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

const fieldStyle = {
  mb: "15px",
  width: "75%",
  borderRadius: "5px",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
  },
};

export const CheckoutForm = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const phoneNumberValue = watch("phoneNumber", ""); // Watch the phoneNumber field

  const handlePhoneInput = (e) => {
    const input = e.target.value;
    if (input.length > 14) return;
    // Prevent typing beyond 14 characters
    const formattedValue = formatPhoneNumber(input);
    setValue("phoneNumber", formattedValue, { shouldValidate: true });
  };

  return (
    <>
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
        value={phoneNumberValue} // Bind the value to the form state
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
        error={!!errors.specialInstructions}
        helperText={errors.specialInstructions?.message}
        sx={fieldStyle}
      />
    </>
  );
};

export default CheckoutForm;
