import { Link } from "react-router";
import { Minus, Plus } from "lucide-react";

const CartItem = ({ image }) => {
  return (
    <li className="flex items-center justify-between font-josefin text-featuredDescriptionText border-b-1 border-[#E1E1E4] py-4">
      <div className="flexCenter gap-4">
        <div className="bg-featuredPictureBG flexCenter size-22 p-2">
          <img src={image} alt="product" className="" />
        </div>

        <div className="flex flex-col gap-1">
          <Link className="">Ut diam consequat</Link>
          <p className="text-xs text-shopSubText">
            Color: <span>Brown</span>
          </p>
          <p className="text-xs text-shopSubText">
            Size: <span>XL</span>
          </p>
        </div>
      </div>

      <span className="text-sm font-semibold">$32.00</span>

      <div className="quantity flexCenter gap-3 ">
        <button className="cursor-pointer size-7 bg-featuredButtonsBG flexCenter rounded-full">
          <Minus size={12} />
        </button>
        <span className="text-sm font-semibold">1</span>
        <button className="cursor-pointer size-7 bg-featuredButtonsBG flexCenter rounded-full">
          <Plus size={12} />
        </button>
      </div>

      <span>£219.00</span>
    </li>
  );
};

export default CartItem;
