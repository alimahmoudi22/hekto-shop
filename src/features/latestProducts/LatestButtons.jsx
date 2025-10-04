import { ShoppingCart, Heart, ZoomIn } from "lucide-react";

const LatestButtons = () => {
  return (
    <div className="Buttons absolute flex flex-col gap-x-1 bottom-12 -left-8 group-hover:left-4 transition-all duration-200 *:hover:bg-featuredButtonsBG">
      <button className="rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
        <ShoppingCart
          size={16}
          className="text-[#1389FF] group-hover/button:text-[#2F1AC4]"
        />
      </button>
      <button className="rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
        <Heart
          size={16}
          className="text-[#1389FF] group-hover/button:text-[#2F1AC4]"
        />
      </button>
      <button className="rounded-full flex items-center justify-center size-7.5 cursor-pointer group/button">
        <ZoomIn
          size={16}
          className="text-[#1389FF] group-hover/button:text-[#2F1AC4]"
        />
      </button>
    </div>
  );
};

export default LatestButtons;
