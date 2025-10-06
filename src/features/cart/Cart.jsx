import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

import image1 from "../../assets/home/featuredProducts/image1.png";
import image2 from "../../assets/home/featuredProducts/image2.png";
import image3 from "../../assets/home/featuredProducts/image3.png";
import image4 from "../../assets/home/featuredProducts/image4.png";

const fakeCart = [image1, image2, image3, image4];

const Cart = () => {
  return (
    <section className="mt-30 container flex items-center gap-20 justify-between flex-wrap">
      <div className="flex-2/5">
        <ul className="flex flex-col">
          {fakeCart.map((item) => (
            <CartItem key={crypto.randomUUID()} image={item} />
          ))}
        </ul>
        <button className="cursor-pointer bg-headerPink w-33 h-10 font-josefin text-white mt-9 float-end">
          Clear Cart
        </button>
      </div>
      <CartTotal />
    </section>
  );
};

export default Cart;
