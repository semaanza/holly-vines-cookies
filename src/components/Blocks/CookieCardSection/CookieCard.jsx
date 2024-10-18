import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CookieModal from "./CookieModal";

export const CookieCard = ({
  cardTitle,
  cookieImage,
  description,
  ingrediants,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      elevation={0}
      sx={{
        height: "auto",
        width: "300px",
        textAlign: "center",
        margin: "20px",
        border: "none",
        backgroundColor: "inherit",
      }}
    >
      <CookieModal
        title={cardTitle}
        description={description}
        open={open}
        img={cookieImage}
        close={handleClose}
        indgrediants={ingrediants}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography sx={{ height: "30%", paddingBottom: "20px" }} variant="h5">
          {cardTitle}
        </Typography>
        <CardActionArea sx={{ borderRadius: "100px" }} onClick={handleOpen}>
          <Box
            sx={{
              height: "250px",
              width: "300px",
              objectFit: "cover",
              borderRadius: "200px",
            }}
            component="img"
            src={cookieImage}
            title={cardTitle}
          />
        </CardActionArea>
      </Box>
    </Card>
  );
};
