import { Link } from "react-router";
import StoreItemBottuns from "./StoreItemBottuns";
import StoreItemColors from "./StoreItemColors";

const StoreItemDefault = ({ image }) => {
  return (
    <div className="text-hektoText group relative overflow-hidden">
      <Link className="picture h-70 flexCenter bg-featuredPictureBG group-hover:bg-[#EBF4F3] transition-all">
        <img src={image} alt="storeProduct" />
      </Link>

      <StoreItemBottuns />

      <div className="desc mt-4.5 text-center">
        <Link className="font-josefine font-bold text-lg">
          Vel elit euismod
        </Link>
        <StoreItemColors />
        <div className="price text-sm font-josefine gap-x-2.5 flexCenter">
          <span>$26.00 </span>
          <span className="text-headerPink line-through">$42.00</span>
        </div>
      </div>
    </div>
  );
};

export default StoreItemDefault;
