import { Box, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";

export const ReviewsSection = ({ cards }) => {
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
      <Typography
        variant="h4"
        sx={{
          width: { xs: "100%", sm: "90%" },
          textAlign: "center",
          marginBottom: { xs: 2, sm: 4 },
        }}
      >
        Reviews
      </Typography>
      {/* map through cards below */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: { xs: "100%", sm: "90%" },
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {cards.map((card, i) => (
          <ReviewCard key={i + card.review} {...card} />
        ))}
      </Box>
    </Box>
  );
};
