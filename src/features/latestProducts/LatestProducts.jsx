import SectionTitle from "../../ui/SectionTitle";

import LatestProductCard from "./LatestProductCard";

import image1 from "../../assets/home/latestProducts/image1.png";
import image2 from "../../assets/home/latestProducts/image2.png";
import image3 from "../../assets/home/latestProducts/image3.png";
import image4 from "../../assets/home/latestProducts/image4.png";
import image5 from "../../assets/home/latestProducts/image5.png";
import image6 from "../../assets/home/latestProducts/image6.png";

const fakeData = [
  {
    id: 301,
    image: image1,
    title: "Comfort Handy Craft",
    offPrice: "42.00",
    price: "65.00",
  },
  {
    id: 302,
    image: image2,
    title: "Comfort Handy Craft",
    offPrice: "42.00",
    price: "65.00",
  },
  {
    id: 303,
    image: image3,
    title: "Comfort Handy Craft",
    offPrice: "42.00",
    price: "65.00",
  },
  {
    id: 304,
    image: image4,
    title: "Comfort Handy Craft",
    offPrice: "42.00",
    price: "65.00",
  },
  {
    id: 305,
    image: image5,
    title: "Comfort Handy Craft",
    offPrice: "42.00",
    price: "65.00",
  },
  {
    id: 306,
    image: image6,
    title: "Comfort Handy Craft",
    offPrice: "42.00",
    price: "65.00",
  },
];

const LatestProducts = () => {
  return (
    <section className="mt-18">
      <div className="container">
        <SectionTitle>Latest Products</SectionTitle>
        <ul className="flexCenter flex-wrap gap-x-7 text-sm sm:text-lg sm:gap-x-15 mt-5 text-featuredDescriptionText gap-y-2">
          <li>
            <button className="cursor-pointer text-headerPink underline">
              New Arrival
            </button>
          </li>
          <li>
            <button className="cursor-pointer">Best Seller</button>
          </li>
          <li>
            <button className="cursor-pointer">Fetured</button>
          </li>
          <li>
            <button className="cursor-pointer">Special Offer</button>
          </li>
        </ul>
        <div className="wrapper mt-15 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-9">
          {fakeData.map((item) => (
            <LatestProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
