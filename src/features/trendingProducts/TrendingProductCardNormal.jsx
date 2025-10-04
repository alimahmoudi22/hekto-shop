import { Link } from "react-router";

const TrendingProductCardNormal = ({ image, title, price, offPrice }) => {
  return (
    <div className="trendingProductCardNormal p-3 shadow-hektoOffer pb-8">
      <Link to={"/product"} className="picture bg-trendingProductBG flexCenter h-61">
        <img src={image} alt="trendingProducts" />
      </Link>
      <div className="desc font-lato text-featuredDescriptionText text-center mt-4">
        <Link
          to={"/product"}
          className="font-bold hover:text-headerPink transition-colors"
        >
          {title}
        </Link>
        <p className="flexCenter gap-x-3 mt-2">
          <span className="text-sm">{price}</span>
          <span className="text-featuredDescriptionText opacity-30 line-through text-xs">
            {offPrice}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TrendingProductCardNormal;
