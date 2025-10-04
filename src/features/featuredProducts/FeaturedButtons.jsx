import { ShoppingCart, Heart, ZoomIn } from "lucide-react";

const FeaturedButtons = () => {
  return (
    <div className="Buttons absolute flex top-2 gap-x-1 left-[-100px] overflow-hidden group-hover:left-2 transition-all duration-200">
      <button className="hover:bg-featuredButtonsBG rounded-full flexCenter size-7.5 cursor-pointer group/button">
        <ShoppingCart
          size={16}
          className="text-featuredLightBlue group-hover/button:text-featuredBlue"
        />
      </button>
      <button className="hover:bg-featuredButtonsBG rounded-full flexCenter size-7.5 cursor-pointer group/button">
        <Heart
          size={16}
          className="text-featuredLightBlue group-hover/button:text-featuredBlue"
        />
      </button>
      <button className="hover:bg-featuredButtonsBG rounded-full flexCenter size-7.5 cursor-pointer group/button">
        <ZoomIn
          size={16}
          className="text-featuredLightBlue group-hover/button:text-featuredBlue"
        />
      </button>
    </div>
  );
};

export default FeaturedButtons;
