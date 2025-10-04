import React from "react";
import MainBanner from "../features/mainBanner/MainBanner";
import FeaturedProducts from "../features/featuredProducts/FeaturedProducts";
import LatestProducts from "../features/latestProducts/LatestProducts";

const Home = () => {
  return (
    <main>
      <MainBanner />
      <FeaturedProducts />
      <LatestProducts />
    </main>
  );
};

export default Home;
