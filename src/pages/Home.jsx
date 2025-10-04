import React from "react";
import HeroBanner from "../features/heroBanner/HeroBanner";
import FeaturedProducts from "../features/featuredProducts/FeaturedProducts";
import LatestProducts from "../features/latestProducts/LatestProducts";
import Offer from "../features/offer/Offer";
import MainBanner from "../features/MainBanner/MainBanner";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <MainBanner />
    </main>
  );
};

export default Home;
