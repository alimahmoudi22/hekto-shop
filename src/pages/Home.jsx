import React from "react";
import MainBanner from "../features/mainBanner/MainBanner";
import FeaturedProducts from "../features/featuredProducts/FeaturedProducts";
import LatestProducts from "../features/latestProducts/LatestProducts";
import Offer from "../features/offer/Offer";

const Home = () => {
  return (
    <main>
      <MainBanner />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
    </main>
  );
};

export default Home;
