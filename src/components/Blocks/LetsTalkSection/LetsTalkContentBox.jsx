import { Box, Typography, Button } from "@mui/material";

export const LetsTalkContentBox = ({ title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "100%" },
        height: { xs: "auto", sm: "90%" },
        flexWrap: "wrap",
        flexDirection: "column",
        padding: "30px",
        backgroundColor: "#fcf8f7",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          pb: { xs: 2, sm: 2 },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          pb: { xs: 2, sm: 2 },
        }}
      >
        {description}
      </Typography>
      <Button
        size="small"
        variant="contained"
        fullWidth={false}
        sx={{
          backgroundColor: "green",
          color: "white",
          fontWeight: "bold",
          width: { xs: "100%", sm: "25%" },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
};
