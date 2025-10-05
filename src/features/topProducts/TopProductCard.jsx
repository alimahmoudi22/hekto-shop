import { Link } from "react-router";

const TopProductCard = ({ image, title, price }) => {
  return (
    <div className="topCategoriesCard flex flex-col items-center">
      {/* Picture */}
      <Link to={"/shop"}>
        <div className="picture bg-[#F6F7FB] rounded-full size-67 flex items-center justify-center shadow-hektoOffer relative group isolate z-20 before:content-[''] before:size-67 before:absolute before:rounded-full before:bg-[#9877E7] before:z-[-1] before:top-0 before:right-0 before:invisible hover:before:visible  before:transition-all hover:before:top-1 hover:before:right-1 after:content-[''] after:size-67 after:absolute after:rounded-full after:bg-[#F6F7FB] after:z-[1] after:inset-0">
          <img src={image} alt="TopProduct" className="relative z-10" />

          <div className="absolute bottom-6 overflow-hidden max-h-0 group-hover:max-h-10 transition-all z-10">
            <span
              to={"/shop"}
              className="bg-[#08D15F] hover:bg-hektoSubText transition-all text-white font-josefine font-medium text-xs py-2 px-4.5 flex items-center justify-center"
            >
              View Shop
            </span>
          </div>
        </div>
      </Link>

      {/* Decription */}
      <div className="desc mt-7 text-featuredDescriptionText text-center">
        <Link to={"/shop"}>
          <h6 className="font-lato font-bold hover:text-headerPink transition-colors">
            {title}
          </h6>
        </Link>
        <span className="font-josefine font-normal">{price}</span>
      </div>
    </div>
  );
};

export default TopProductCard;
