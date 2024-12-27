import { Typography, Box, Button, IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

export const ShopCookieCard = ({ cookieTitle, cookieImage, ingredients }) => {
  return (
    <Box
      sx={{
        border: "2px solid black",
        borderRadius: "10px",
        width: { xs: "100%", sm: "50%", md: "30%" },
        height: "350px",
        margin: "10px",
        position: "relative",
        ":hover": {
          boxShadow: "0 0 10px 0px black",
          transform: { xs: "scale(1.0)", sm: "scale(1.15)" },
          transition: "all 0.3s ease",
          zIndex: 100,
        },
      }}
    >
      <Box sx={{ width: "100%", height: "70%" }}>
        <Box
          component="img"
          src={cookieImage}
          sx={{
            objectFit: "fill",
            width: { xs: "100%", sm: "100%" },
            height: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "30%",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderTop: "2px solid black",
          backgroundColor: "secondary.main",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Typography sx={{ width: "50%" }}>{cookieTitle}</Typography>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* <Button sx={{ mr: "15px" }} variant="contained">
            Order Now
          </Button> */}
          <IconButton
            // color="inherit"
            aria-label="see ingredients"
            edge="start"
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              height: "20px",
              width: "20px",
            }}
          >
            <ArrowUpward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
