import { Box, Typography } from "@mui/material";
import { LetsTalkContentBox } from "./LetsTalkContentBox";

export const LetsTalkSection = ({
  subTitle = "Make Your Order Our Next Obsession",
  title = "Lets Talk",
  description = "We're eager to hear about your cookie preferences, goals, needs and cravings. Let's arrange a discussion.",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xs: "auto", sm: "50%" },
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        backgroundColor: " #B2AC88",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", sm: "50%" },
          justifyContent: "center",
          alignItems: "center",
          pb: { xs: 4, sm: 0 },
          textAlign: "center",
        }}
      >
        <Typography variant="h4">{subTitle}</Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: { xs: "auto", sm: "80%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LetsTalkContentBox title={title} description={description} />
      </Box>
    </Box>
  );
};
