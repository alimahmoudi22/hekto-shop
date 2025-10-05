import HektoLogo from "../../../public/Hekto.svg";
import FooterAllRight from "./FooterAllRight";

const Footer = () => {
  return (
    <section className="Footer bg-featuredButtonsBG pt-23.5 text-heroBannerSubText mt-30">
      <div className="container">
        <div className="wrapper flex justify-between">
          <div className="1">
            <img src={HektoLogo} alt="hekto-logo" />
            <div className="input flex items-center relative max-w-86 mt-7.5 mb-6">
              <input
                type="text"
                className="w-84 bg-white h-10 outline-none pl-3.5 border-hektoStroke border-2 placeholder:text-heroBannerSubText placeholder:text-sm"
                placeholder="Enter Email Address"
              />
              <button className="absolute right-0 bg-headerPink text-white h-full w-34 flex items-center justify-center cursor-pointer">
                Sign Up
              </button>
            </div>
            <div className="contact">
              <span className="inline-block mb-2.5">Contact Info</span>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          <div className="2">
            <p className="font-josefine font-semibold text-2xl text-featuredDescriptionText mb-8">
              Catagories
            </p>
            <ul className="flex flex-col gap-y-5">
              <li className="font-lato text-base">Laptops & Computers</li>
              <li className="font-lato text-base">Cameras & Photography</li>
              <li className="font-lato text-base">Smart Phones & Tablets</li>
              <li className="font-lato text-base">Video Games & Consoles</li>
              <li className="font-lato text-base">Waterproof Headphones</li>
            </ul>
          </div>
          <div className="3">
            <p className="font-josefine font-semibold text-2xl text-featuredDescriptionText mb-8">
              Customer Care
            </p>
            <ul className="flex flex-col gap-y-5">
              <li className="font-lato text-base">My Account</li>
              <li className="font-lato text-base">Discount</li>
              <li className="font-lato text-base">Returns</li>
              <li className="font-lato text-base">Orders History</li>
              <li className="font-lato text-base">Order Tracking</li>
            </ul>
          </div>
          <div className="4">
            <p className="font-josefine font-semibold text-2xl text-featuredDescriptionText mb-8">
              Pages
            </p>
            <ul className="flex flex-col gap-y-5">
              <li className="font-lato text-base">Blog</li>
              <li className="font-lato text-base">Browse the Shop</li>
              <li className="font-lato text-base">Category</li>
              <li className="font-lato text-base">Pre-Built Pages</li>
              <li className="font-lato text-base">Visual Composer Elements</li>
              <li className="font-lato text-base">WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterAllRight />
    </section>
  );
};

export default Footer;
