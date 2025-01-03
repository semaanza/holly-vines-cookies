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
        // backgroundImage: "url('https://picsum.photos/2')",
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
          // opacity: "0.5",
          position: "absolute",
          //backgroundColor: "inherit",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "left", mb: "20px" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "left", mb: "40px" }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          href="/contact"
          sx={{ width: { xs: "40%" } }}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
};
