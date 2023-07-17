import React from "react";

import bannerimg2 from "../../images/banner-image2.jpg";
const RightHeroSectionComp = () => {
  return (
    <div className="sec1-right">
      <img src={bannerimg2} alt="bannerImage" />
      <span>$22</span>
      <span className="price">-40%</span>
    </div>
  );
};

export default RightHeroSectionComp;
