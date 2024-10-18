import { Box, Typography, Button } from "@mui/material";
import React from "react";

export const Promise = ({
  mainImage,
  secondaryImage,
  description = "We commit to delivering fresh, homemade cookies made with love and the finest ingredients.",
  title = "Our Promise",
  cta,
}) => {
  return (
    <Box>
      <Box>
        <h1>{title}</h1>
        <Box>
          <Typography>{description}</Typography>
          <Button variant="contained">{cta}</Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box>
            <img src={mainImage} alt="main" />
          </Box>
          <Box>
            <img src={secondaryImage} alt="secondary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
