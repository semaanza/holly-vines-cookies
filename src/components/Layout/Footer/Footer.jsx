import React from "react";
import { Box, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

export const Footer = ({ logo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ height: "auto", backgroundColor: "lightgray" }}>
      <Grid
        container
        sx={{ p: "10px", width: "100%", height: "50%", alignItems: "center" }}
      >
        <Grid item xs={0} sm={5}>
          <Box component="a" href="/">
            <Box
              component="img"
              src={logo}
              alt="Holly Vines Logo"
              title="Holly Vines Logo"
              sx={{
                objectFit: "cover",
                height: "30px",
                width: "30px",
                display: { xs: "none", sm: "block" },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <IconButton
              href="https://www.facebook.com/hollyvinesco"
              target="_blank"
              size="large"
            >
              <Facebook />
            </IconButton>
            <IconButton
              target="_blank"
              size="large"
              href="https://www.instagram.com/hollyvinesco/"
            >
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{ p: "10px", width: "100%", height: "50%", textAlign: "center" }}
      >
        © {currentYear} Holly Vines Cookies. All rights reserved.
      </Box>
    </Box>
  );
};
