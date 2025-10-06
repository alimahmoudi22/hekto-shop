import { ShoppingCart, Heart, ZoomIn } from "lucide-react";

const StoreItemBottuns = ({ type }) => {
  if (type === "absolute")
    return (
      <div className="Bottuns absolute flex flex-col gap-x-1 bottom-28 -left-8 group-hover:left-3 transition-all duration-200">
        <button className="hover:bg-white rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
          <ShoppingCart
            size={16}
            className="text-featuredDescriptionText group-hover/button:text-featuredBlue"
          />
        </button>
        <button className="hover:bg-white rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
          <Heart
            size={16}
            className="text-featuredDescriptionText group-hover/button:text-featuredBlue"
          />
        </button>
        <button className="hover:bg-white rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
          <ZoomIn
            size={16}
            className="text-featuredDescriptionText group-hover/button:text-featuredBlue"
          />
        </button>
      </div>
    );

  if (type === "stable")
    return (
      <div className="Bottuns flex gap-x-4 transition-all mt-7">
        <button className="hover:bg-featuredButtonsBG rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
          <ShoppingCart
            size={20}
            className="text-featuredDescriptionText group-hover/button:text-featuredBlue"
          />
        </button>
        <button className="hover:bg-featuredButtonsBG rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
          <Heart
            size={20}
            className="text-featuredDescriptionText group-hover/button:text-featuredBlue"
          />
        </button>
        <button className="hover:bg-featuredButtonsBG rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
          <ZoomIn
            size={20}
            className="text-featuredDescriptionText group-hover/button:text-featuredBlue"
          />
        </button>
      </div>
    );
};

export default StoreItemBottuns;
