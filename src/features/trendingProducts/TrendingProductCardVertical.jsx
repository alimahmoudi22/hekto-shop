import React from "react";
import { Link } from "react-router";

const TrendingProductCardVertical = ({ image, title, linkText, bgC }) => {
  return (
    <div
      className={`trendingProductCardVertical relative h-67.5 pt-8.5 pl-6`}
      style={{ backgroundColor: bgC }}
    >
      <div className="desc">
        <h5 className="text-featuredDescriptionText font-josefine font-semibold text-2xl">
          {title}
        </h5>
        <Link
          to={"/product"}
          className="text-headerPink underline font-lato font-semibold  mt-2.5"
        >
          {linkText}
        </Link>
      </div>
      <Link to={"/product"} className="picture absolute right-0 bottom-0">
        <img src={image} alt="TrendingProduct" />
      </Link>
    </div>
  );
};

export default TrendingProductCardVertical;
