import SectionTitle from "../../ui/SectionTitle";
import TrendingProductCardNormal from "./TrendingProductCardNormal";
import TrendingProductCardVertical from "./TrendingProductCardVertical";
import TrendingProductCardSmall from "./TrendingProductCardSmall";

import image1 from "../../assets/home/trendingProducts/image1.png";
import image2 from "../../assets/home/trendingProducts/image2.png";
import image3 from "../../assets/home/trendingProducts/image3.png";
import image4 from "../../assets/home/trendingProducts/image4.png";
import image5 from "../../assets/home/trendingProducts/image5.png";
import image6 from "../../assets/home/trendingProducts/image6.png";
import image7 from "../../assets/home/trendingProducts/image7.png";
import image8 from "../../assets/home/trendingProducts/image8.png";
import image9 from "../../assets/home/trendingProducts/image9.png";

const fakeData = [
  {
    id: 100,
    image: image1,
    title: "Cantilever chair",
    price: "$26.00",
    offPrice: "$42.00",
    type: "normall",
  },
  {
    id: 101,
    image: image2,
    title: "Cantilever chair",
    price: "$26.00",
    offPrice: "$42.00",
    type: "normall",
  },
  {
    id: 102,
    image: image3,
    title: "Cantilever chair",
    price: "$26.00",
    offPrice: "$42.00",
    type: "normall",
  },
  {
    id: 103,
    image: image4,
    title: "Cantilever chair",
    price: "$26.00",
    offPrice: "$42.00",
    type: "normall",
  },
  {
    id: 104,
    image: image5,
    title: "23% off in all products",
    linkText: "Shop Now",
    bgC: "#FFF6FB",
    type: "vertical",
  },
  {
    id: 105,
    image: image6,
    title: "23% off in all products",
    linkText: "View Collection",
    bgC: "#EEEFFB",
    type: "vertical",
  },
  {
    id: 106,
    image: image7,
    title: "Executive Seat chair",
    offPrice: "$32.00",
    type: "small",
  },
  {
    id: 107,
    image: image8,
    title: "Executive Seat chair",
    offPrice: "$32.00",
    type: "small",
  },
  {
    id: 108,
    image: image9,
    title: "Executive Seat chair",
    offPrice: "$32.00",
    type: "small",
  },
];

const TrendingProducts = () => {
  return (
    <section className="trendingProducts mt-30">
      <div className="container">
        <SectionTitle>Trending Products</SectionTitle>
        <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-10">
          
          {fakeData.map((item) => {
            if (item.type === "normall")
              return <TrendingProductCardNormal key={item.id} {...item} />;
          })}

          <div className="vertical grid grid-cols-1 sm:col-span-2 lg:col-span-3 lg:grid-cols-2 gap-7">
            {fakeData.map((item) => {
              if (item.type === "vertical")
                return <TrendingProductCardVertical key={item.id} {...item} />;
            })}
          </div>

          <div className="small flexCenter flex-wrap flex-col gap-y-7 lg:gap-y-0 sm:flex-row sm:col-span-2 lg:col-span-3 xl:col-span-1 xl:flex-col sm:justify-between">
            {fakeData.map((item) => {
              if (item.type === "small")
                return <TrendingProductCardSmall key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
