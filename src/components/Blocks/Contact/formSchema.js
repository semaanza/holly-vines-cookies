export const schema = {
  fullName: {
    required: "Full name is required",
    minLength: {
      value: 3,
      message: "Full name should be at least 3 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  },
  phoneNumber: {
    required: "Phone number is required",
    pattern: {
      value: /^\d{3}-\d{3}-\d{4}$/,
      message: "Invalid phone number. Use XXX-XXX-XXXX format",
    },
  },
  message: {
    required: "Message is required",
    minLength: {
      value: 10,
      message: "Message should be at least 10 characters",
    },
  },
};

export default formSchema;
