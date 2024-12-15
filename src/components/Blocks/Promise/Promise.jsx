import { Box, Typography, Button } from "@mui/material";
import React from "react";

export const Promise = ({
  mainImage = "https://picsum.photos/id/13/700/300",
  secondaryImage = "https://picsum.photos/id/12/400/300",
  description = "We commit to delivering fresh, homemade cookies made with love and the finest ingredients.",
  title = "Our Promise",
  cta = "Check Out Our Story",
}) => {
  return (
    <Box
      sx={{
        height: { xs: "auto" },
        width: "100%",
        padding: "30px",
        mb: { xs: "20px", sm: "10px" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginBottom: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: { xs: "100%", sm: "50%" },
              textAlign: { xs: "center", sm: "left" },
              marginBottom: { xs: 2, sm: 0 },
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>{description}</Typography>
            <Box mt={2}>
              <Button size="small" variant="contained">
                {cta}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: "20px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%,", md: "68%" },
              marginRight: { xs: 0, md: "4%" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              component="img"
              src={mainImage}
              alt="main"
            />
          </Box>
          <Box sx={{ width: "28%", display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              component="img"
              src={secondaryImage}
              alt="secondary"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
