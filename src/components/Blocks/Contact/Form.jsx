import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { formatPhoneNumber } from "../../../utils/formatPhoneNumber";

const fieldStyle = {
  mb: "15px",
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

export const Form = ({ snackbar }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const phoneNumberValue = watch("phoneNumber", "");

  const onSubmit = async (data) => {
    emailjs
      .send("service_kvul08f", "template_h7u9baw", data, {
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
  };

  const handlePhoneInput = (e) => {
    const input = e.target.value;
    if (input.length > 14) return;
    const formattedValue = formatPhoneNumber(input);
    setValue("phoneNumber", formattedValue, { shouldValidate: true });
  };

  return (
    <Box sx={boxStyle}>
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
        onChange={handlePhoneInput} // Use onChange instead of onInput
      />
      <TextField
        label="Message"
        {...register("message", {
          required: "Message is required",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters long",
          },
        })}
        error={!!errors.message}
        helperText={errors.message?.message}
        sx={fieldStyle}
        multiline
        rows={4}
      />
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Send Message
      </Button>
    </Box>
  );
};

export default Form;
