import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { ShopCookieCard } from "@/components";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../../tina/__generated__/client";

const { data } = useTina({
  query: props.query,
  variables: props.variables,
  data: props.data,
});

export default function Shop() {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        mb: "100px",
        mt: "100px",
        padding: "30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          Height: "auto",
        }}
      >
        <Typography variant="h3" mb={2} sx={{ fontWeight: "bold" }}>
          Holly Vines Cookies
        </Typography>
      </Box>
      {/* filter and sorting to be here in future  */}
      <Divider
        sx={{
          width: "100%",
          borderBottom: "2px solid black",
          color: "black",
          mb: 4,
        }}
      />
      {/*cookie card container */}
      <Box
        sx={{
          height: "auto",
          width: "100%",
          justifyContent: { sm: "center", md: "space-between" },
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/*map through cards here */}
        <ShopCookieCard />
        <ShopCookieCard />
        <ShopCookieCard />
        <ShopCookieCard />
        <ShopCookieCard />
        <ShopCookieCard />
      </Box>
    </Box>
  );
}
