import OfferCard from "./OfferCard";
import SectionTitle from "../../ui/SectionTitle";

import free from "../../assets/home/Offer/free.png";
import cashback from "../../assets/home/Offer/cashback.png";
import premium from "../../assets/home/Offer/premium.png";
import support from "../../assets/home/Offer/support.png";

const fakeData = [
  {
    id: 201,
    image: free,
    title: "Free Delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 202,
    image: cashback,
    title: "CashBack",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 203,
    image: premium,
    title: "Premium Quality",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    id: 204,
    image: support,
    title: "24/7 Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

const Offer = () => {
  return (
    <section className="offer mt-20">
      <div className="container">
        <SectionTitle>What Shopex Offer!</SectionTitle>
        <div className="wrapper mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {fakeData.map((item) => (
            <OfferCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
