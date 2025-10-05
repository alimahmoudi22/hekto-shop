import HeroBanner from "../features/heroBanner/HeroBanner";
import FeaturedProducts from "../features/featuredProducts/FeaturedProducts";
import LatestProducts from "../features/latestProducts/LatestProducts";
import Offer from "../features/offer/Offer";
import MainBanner from "../features/mainBanner/MainBanner";
import TrendingProducts from "../features/trendingProducts/TrendingProducts";
import Discount from "../features/discount/discount";
import TopProducts from "../features/topProducts/TopProducts";
import Newsletter from "../features/newsLetter/Newsletter";
import LeatestBlog from "../features/latestBlog/LatestBlog";

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
      <Newsletter />
      <LeatestBlog />
    </main>
  );
};

export default Home;
