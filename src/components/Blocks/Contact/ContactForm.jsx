import { Box, Button, TextField, Typography } from "@mui/material";

export default function ContactForm() {
  const onSubmit = () => {
    console.log("submitted");
  };

  const fieldStyle = {
    mb: "10px",
    color: "green",
    width: "100%",
  };
  return (
    <Box
      sx={{
        padding: "16px",
        border: "4px solid tan",
        borderRadius: "10px",
        width: { xs: "100%", sm: "25%" },
      }}
    >
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography mb={"20px"} variant="h4">
            Place Your Orders:
          </Typography>
          <TextField
            sx={fieldStyle}
            variant="outlined"
            label="Name"
            id="name"
            // helperText="Please enter your full name."
          />
          <TextField
            sx={fieldStyle}
            variant="outlined"
            label="Phone Number"
            id="phoneNumber"
            // helperText="Please enter a valid phone number."
          />
          <TextField
            sx={fieldStyle}
            variant="outlined"
            label="Email"
            id="email"
            // helperText="Please enter a valid email."
          />
          <TextField
            sx={fieldStyle}
            variant="outlined"
            label="Order"
            id="order"
            rows={5}
            multiline
            maxRows={20}
            // helperText="Enter your order."
          />
          <Button variant="contained" sx={{ width: "90%", color: "white" }}>
            Start Baking!!
          </Button>
        </Box>
      </form>
    </Box>
  );
}
