import React from "react";

import HeroCardOverlap from "./HeroCardOverlap";
import TrendingSectionComp from "./TrendingSectionComp";
import TopGameComp from "./TopGameComp";
import CategoryComp from "./CategoryComp";
// import CtaComp from "./CtaComp";

import HeroSectionComp from "./HeroSectionComp";

const HomeComponent = () => {
  return (
    <>
      <HeroSectionComp />
      <HeroCardOverlap />
      <TrendingSectionComp />

      <TopGameComp />
      <CategoryComp />

      {/*  <CtaComp /> */}
    </>
  );
};

export default HomeComponent;
