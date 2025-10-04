import React from "react";
import { Link } from "react-router";

const TrendingProductCardSmall = ({ image, title, offPrice }) => {
  return (
    <div className="TrendingProductCardSmall flex items-center gap-x-2.5">
      <Link to={"/product"} className="picture bg-trendingProductBG px-5 py-1 flex items-center justify-center">
        <img src={image} alt="TrendingProduct" />
      </Link>
      <div className="desc text-featuredDescriptionText flex flex-col">
        <Link to={"/product"} className="font-josefine font-semibold hover:text-headerPink transition-colors">{title}</Link>
        <span className="font-josefine font-normal text-xs line-through">
          {offPrice}
        </span>
      </div>
    </div>
  );
};

export default TrendingProductCardSmall;
