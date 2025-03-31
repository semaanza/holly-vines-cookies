import { useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import {
  ArrowUpward,
  AddCircleOutlineOutlined,
  ArrowUpwardOutlined,
  ArrowUpwardTwoTone,
} from "@mui/icons-material";
import { useCookieCart } from "../../../store";

export const ShopCookieCard = ({ cookieTitle, cookieImage, ingredients }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  const handleToggle = () => {
    setShowIngredients((prev) => !prev);
  };

  // const { addToCart } = useCookieCart((state) => ({
  //   addToCart: state.addToCart,
  // }));
  // const handleAddToCart = () => {
  //   addToCart({ name: cookieTitle, image: cookieImage, ingredients });
  // };
  return (
    <Box
      sx={{
        border: "2px solid black",
        borderRadius: "10px",
        width: { xs: "100%", sm: "50%", md: "30%" },
        height: "350px",
        margin: "10px",
        position: "relative",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          boxShadow: "0 0 10px 0px black",
          transform: { xs: "scale(1.0)", sm: "scale(1.15)" },
          zIndex: 100,
        },
      }}
    >
      <Box sx={{ width: "100%", height: "70%", position: "relative" }}>
        <Box
          component="img"
          src={cookieImage}
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            width: { xs: "100%", sm: "100%" },
            height: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            transition: "opacity 0.3s ease-in-out",
            opacity: showIngredients ? 0 : 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "secondary.light",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            transition: "opacity 0.3s ease-in-out",
            opacity: showIngredients ? 1 : 0,
          }}
        >
          <Typography
            sx={{
              height: "100%",
              padding: "10px",
              overflow: "scroll",
            }}
          >
            {ingredients}
          </Typography>
        </Box>
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
        <Typography variant="h5" sx={{ width: "50%" }}>
          {cookieTitle}
        </Typography>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <IconButton
            aria-label="add to cart"
            // edge="start"
            onClick={() => {
              // handleAddToCart(cookieTitle);
              console.log(`Adding ${cookieTitle} to cart`);
            }}
            sx={{
              height: "50px",
              width: "50px",
            }}
          >
            <AddCircleOutlineOutlined
              sx={{
                fontSize: { xs: "60px", sm: "40px" },
                mr: { xs: "30px", sm: "0px" },
              }}
            />
          </IconButton>
          <IconButton
            aria-label="see ingredients"
            onClick={handleToggle}
            sx={{
              height: "30px",
              width: "30px",
            }}
          >
            <ArrowUpwardTwoTone sx={{ fontSize: { xs: "60px", sm: "40px" } }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
