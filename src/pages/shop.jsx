import React from "react";
import { Box } from "@mui/material";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";
import { ShopCookieCardSection } from "../components";

export default function Shop(props) {
  // const { data } = useTina({
  //   query: props.query,
  //   variables: props.variables,
  //   data: props.data,
  // });
  // console.log(data);

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
      <ShopCookieCardSection />
    </Box>
  );
}
