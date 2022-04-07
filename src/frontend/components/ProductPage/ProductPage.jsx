import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductFilter from "../ProductFilter/ProductFilter";

const ProductPage = () => {
  return (
    <div className="product-filter-container">
      <ProductFilter />
      <div className="product-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductPage;
