import { Link } from "react-router";
import StoreItemColors from "./StoreItemColors";
import StoreItemBottuns from "./StoreItemBottuns";

const StoreItemList = ({ image }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="picture bg-featuredPictureBG w-78 h-55 flexCenter">
        <img src={image} alt="product" />
      </div>

      <div className="desc mt-4.5">
        <div className="flex items-center gap-4.5">
          <Link className="font-josefine font-bold text-lg text-featuredDescriptionText">
            Vel elit euismod
          </Link>
          <StoreItemColors />
        </div>
        <div className="price text-sm font-josefin space-x-2 my-3">
          <span className="text-featuredDescriptionText">$26.00</span>
          <span className="text-headerPink line-through">$42.00</span>
        </div>
        <p className="text-shopSubText max-w-148">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <StoreItemBottuns type={"stable"} />
      </div>
    </div>
  );
};

export default StoreItemList;
