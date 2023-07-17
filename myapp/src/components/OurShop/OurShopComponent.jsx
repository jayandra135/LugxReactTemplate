import React from "react";
import "../Home/Home.css";
import "../OurShop/ourshop.css";
import OurshopHeader from "./OurshopHeader";
import OurShopTrending from "./OurShopTrending";

const OurShopComponent = () => {
  return (
    <>
      <OurshopHeader />
      <OurShopTrending />
    </>
  );
};

export default OurShopComponent;
