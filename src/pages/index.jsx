"use client";
import { Box } from "@mui/material";
import { HeroBanner } from "@/components/Blocks/HeroBanner";
import { LatestCookieSection } from "@/components/Blocks/LatestCookies";
import chocolateChip from "/public/chocolate.png";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <LatestCookieSection
          title="Chocolate Chip"
          description="lCulpa ullamco veniam nulla aute anim tempor do dolor tempor laborum. Elit enim non in adipisicing officia esse aliquip cillum laborum deserunt non."
          imgSource="https://picsum.photos/id/10/800/600"
          reverse={false}
        />
        <LatestCookieSection
          title="Peanut Butter"
          description="lCulpa ullamco veniam nulla aute anim tempor do dolor tempor laborum. Elit enim non in adipisicing officia esse aliquip cillum laborum deserunt non."
          imgSource="https://picsum.photos/id/1/800/600"
          reverse={true}
        />
        <LatestCookieSection
          title="M & M"
          description="lCulpa ullamco veniam nulla aute anim tempor do dolor tempor laborum. Elit enim non in adipisicing officia esse aliquip cillum laborum deserunt non."
          imgSource="https://picsum.photos/id/13/800/600"
          reverse={false}
        />
      </Box>
    </>
  );
}
