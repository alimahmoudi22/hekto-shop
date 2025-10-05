import React from "react";
import HeroBanner from "../features/heroBanner/HeroBanner";
import FeaturedProducts from "../features/featuredProducts/FeaturedProducts";
import LatestProducts from "../features/latestProducts/LatestProducts";
import Offer from "../features/offer/Offer";
import MainBanner from "../features/MainBanner/MainBanner";
import TrendingProducts from "../features/trendingProducts/TrendingProducts";
import Discount from "../features/Discount/Discount";
import TopProducts from "../features/topProducts/TopProducts";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <MainBanner />
      <TrendingProducts />
      <Discount />
      <TopProducts />
    </main>
  );
};

export default Home;
