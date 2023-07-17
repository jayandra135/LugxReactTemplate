import React from "react";
import ProductHeaderComp from "./ProductHeaderComp";
import "../ProductDetails/productdetails.css";
import ProductInfoComp from "./ProductInfoComp";
import MoreInfoComp from "./MoreInfoComp";
import ActionGamesComp from "./ActionGamesComp";

const ProductComponent = () => {
  return (
    <>
      <ProductHeaderComp />
      <ProductInfoComp />
      <MoreInfoComp />
      <ActionGamesComp />
    </>
  );
};

export default ProductComponent;
