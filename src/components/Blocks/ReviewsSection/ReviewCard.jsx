import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const ReviewCard = () => {
  return (
    <Box
      sx={{
        height: "80%",
        width: "25%",
        minWidth: "300px",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        textAlign: "center",
        mb: { xs: "20px" },
      }}
    >
      {/* need to add star symbols */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </Box>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia
        dolorum obcaecati. Amet labore cumque ipsa sapiente officia eos
        doloribus nobis.
      </Typography>
      <Typography variant="h6">- John Doe</Typography>
    </Box>
  );
};
