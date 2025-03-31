import React from "react";
import { ContactForm } from "@/components";
import { Typography, Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

export default function contact() {
  const scrollToForm = () => {
    document
      .getElementById("contactForm")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xs: "auto", sm: "100vh" },
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          padding: { xs: 2, sm: 5 },
          mt: { xs: 15, sm: 0 },
          mb: { xs: 20, sm: 0 },
          textAlign: { xs: "center", sm: "start" },
        }}
      >
        <Typography variant={"h3"}>
          Crafting joy with every cookie. Tell me how I can serve you
        </Typography>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: 2, sm: 2 },
            width: { xs: "100%", sm: "70%" },
            textAlign: "center",
            backgroundColor: "primary.dark",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <Typography variant="h5" mb={2}>
            Hi, I’m Becca! Let’s chat about your amazing ideas and cookie needs.
          </Typography>
          <Typography variant="body1">
            "I enjoy translating your thoughts to our diversely skilled team for
            the best results"
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignCenter: "center",
            mt: 5,
          }}
        >
          <IconButton
            aria-label="see ingredients"
            edge="start"
            onClick={scrollToForm}
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              height: "auto ",
              width: "50%",
              display: { xs: "flex", sm: "none" },
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Contact Form</Typography>
            <ArrowDownward />
          </IconButton>
        </Box>
      </Box>
      <ContactForm />
    </Box>
  );
}
