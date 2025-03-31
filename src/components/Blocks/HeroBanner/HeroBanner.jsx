import { Box, Button, Typography } from "@mui/material";

export const HeroBanner = ({ mainImage, title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "flex-start" },
        backgroundColor: "lightgray",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${mainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "auto", sm: 400 },
          height: "auto",
          pl: { xs: "30px", sm: "60px" },
          pr: "30px",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            p: 1,
            borderRadius: "10px",
            mb: 2,
            opacity: 0.8,
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "left", mb: "20px" }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "left", mb: "40px" }}>
            {description}
          </Typography>
        </Box>
        <Button
          variant="contained"
          href="/contact"
          sx={{ width: { xs: "100%", sm: "50%" } }}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
};
