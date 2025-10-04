import { Link } from "react-router";

import LatestButtons from "./LatestButtons";

const LatestProductCard = ({ image, title, offPrice, price }) => {
  return (
    <div className="latestProductCard overflow-hidden group relative">
      <Link to={"/product"}>
        <div className="Picture h-67.5 bg-featuredPictureHoverBG flexCenter hover:bg-white transition-all">
          <img src={image} alt="latestproduct" />
        </div>
      </Link>

      <LatestButtons />

      <div className="decs text-featuredDescriptionText flex items-center justify-between mt-2 px-1">
        <Link to={"/product"}>
          <span className="font-josefine font-normal text-sm sm:text-base hover:text-headerPink underline decoration-featuredButtonsBG hover:decoration-headerPink underline-offset-4 transition-colors">
            {title}
          </span>
        </Link>
        <p className="font-josefine font-normal flexCenter gap-x-2">
          <span className="text-sm font-semibold">${offPrice}</span>
          <span className="text-headerPink text-xs line-through">${price}</span>
        </p>
      </div>
    </div>
  );
};

export default LatestProductCard;
