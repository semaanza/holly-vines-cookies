export { Box, Typography, Divider } from "@mui/material";
export { ShopCookieCard } from "./ShopCookieCard";

export const ShopCookieCardSection = () => {
  return (
    <>
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
    </>
  );
};
