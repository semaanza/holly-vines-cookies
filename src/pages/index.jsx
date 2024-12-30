"use client";
import { Box } from "@mui/material";
import {
  HeroBanner,
  Promise,
  LatestCookieSection,
  HowWeWork,
  LetsTalkSection,
  ReviewsSection,
} from "../components";
import homeData from "../../content/page/home.json";

export default function Home() {
  const heroData = homeData.block[0];
  const latestCookiesData = homeData.block[1];
  const howWeWorkData = homeData.block[2];
  const promiseData = homeData.block[3];
  const reviewsData = homeData.block[4];
  const letsTalkData = homeData.block[5];

  return (
    <>
      <HeroBanner {...heroData} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          mb: "100px",
        }}
      >
        {latestCookiesData.cookies.map((cookie, i) => (
          <LatestCookieSection key={i + cookie.title} {...cookie} />
        ))}
      </Box>
      <HowWeWork cards={howWeWorkData.howWeWorkCards} />
      <Promise {...promiseData} />
      <ReviewsSection cards={reviewsData.reviewCards} />
      <LetsTalkSection {...letsTalkData} />
    </>
  );
}
