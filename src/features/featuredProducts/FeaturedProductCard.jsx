import { Link } from "react-router";
import FeaturedButtons from "./FeaturedButtons";
import FeaturedProductColors from "./FeaturedProductColors";

const FeaturedProductCard = ({ image, title, code, price }) => {
  return (
    <div className="featuredProductCard shadow-hektoFeatured group overflow-hidden relative">
      <Link to={"/product:id"}>
        <div className="Picture bg-featuredPictureBG group-hover:bg-featuredPictureHoverBG flexCenter flex-col pb-2">
          <div className="h-59 flexCenter">
            <img src={image} alt="FeaturedProduct1" />
          </div>
          <span className="Detail w-23.5 bg-featuredGreen text-white font-josefine font-medium text-xs items-center justify-center flex h-0 overflow-hidden group-hover:h-7.5 transition-all duration-200">
            View Details
          </span>
        </div>
      </Link>

      <FeaturedButtons />

      <div className="decription flex flex-col items-center group-hover:bg-featuredBlue group-hover:*:text-white transition-all">
        <Link
          to={"/product/:id"}
          className="font-bold text-headerPink mt-4 text-lg"
        >
          {title}
        </Link>

        <FeaturedProductColors />

        <span className="font-josefine font-normal text-featuredDescriptionText text-sm my-3">
          Code - {code}
        </span>
        <p className="text-sm font-semibold text-featuredDescriptionText mb-4">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
