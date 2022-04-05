import React from "react";
import "./Home.css";
import { products } from "../../../backend/db/products";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div class="category-img-container">
        <img class="category-img" src="assets/trending.jpg" alt="" />
        <img class="category-img" src="assets/bestsellers.jpg" alt="" />
        <img class="category-img" src="assets/latest.jpg" alt="" />
        <img class="category-img" src="assets/valentine's.jpg" alt="" />
      </div>
      {/* Banner Image */}
      <div className="banner-img">
        <img src="assets/mobileBanner.jpg" alt="" />
      </div>
      <div className="display-products-banner">
        <span className="display-products-banner__content">
          Trending Products
        </span>
      </div>
      <div className="display-products-banner__products">
        <ProductCard />
      </div>

      <div className="display-products-banner">
        <span className="display-products-banner__content">
          Products under 10,000 INR
        </span>
      </div>
      <div className="display-products-banner__products">
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
