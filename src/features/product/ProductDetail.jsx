import { Heart, ShoppingCart } from "lucide-react";
import product from "../../assets/product/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";

const ProductDetail = () => {
  return (
    <section className="mt-30">
      <div className="container flex items-center gap-10 shadow-hektoFeatured rounded-b-sm">
        <div className="left">
          <img src={product} alt="product" />
        </div>
        <div className="right">
          <h3 className="font-josefin font-semibold text-4xl text-productTitle">
            Playwood arm chair
          </h3>
          <div className="price flex items-center gap-4.5 font-josefin text-featuredDescriptionText mt-3">
            <span className="font-semibold">$32.00</span>
            <span className="text-headerPink">$38.00</span>
          </div>
          <p className="text-shopSubText max-w-134 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <div className="flex items-center gap-8 mt-10 text-featuredDescriptionText">
            <button className="flexCenter gap-2 cursor-pointer hover:text-headerPink transition-colors">
              <span>Add To Cart</span>
              <ShoppingCart />
            </button>
            <button className="flexCenter gap-2 cursor-pointer hover:text-headerPink transition-colors">
              <span>Add To Wishlist</span>
              <Heart />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
