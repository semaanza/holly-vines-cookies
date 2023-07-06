import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

export default function CookieCard({ cardTitle, cookieImage, description }) {
  return (
    <Card
      sx={{
        height: "80vh",
        width: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <CardActionArea>
        <Box>
          <Typography variant="h4" sx={{ height: "10vh" }}>
            {cardTitle}
          </Typography>
          <CardMedia
            image={cookieImage}
            title={cardTitle}
            sx={{ height: "40vh" }}
          />
          <Typography variant="body1" sx={{ height: "30vh" }}>
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
