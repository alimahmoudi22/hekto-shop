import { Check } from "lucide-react";
import { Link } from "react-router";

import DiscountProduct from "../../assets/home/discount/tortuga-01-b 1.png";

import SectionTitle from "../../ui/SectionTitle";
import LinkButton from "../../ui/LinkButton";
import DiscountMenu from "./DiscountMenu";

const Discount = () => {
  return (
    <section className="discount mt-30 overflow-hidden">
      <SectionTitle>Discount Item</SectionTitle>

      <DiscountMenu />

      <div className="container">
        <div className="wrapper flexCenter flex-wrap-reverse xl:flex-nowrap">
          <div className="left flex flex-col items-center text-center lg:text-left lg:items-start">
            <h3 className="font-josefine font-bold text-featuredDescriptionText text-3xl xl:text-4xl">
              20% Discount Of All Products
            </h3>
            <h5 className="font-josefine font-normal text-xl text-headerPink mt-4 mb-5">
              Eams Sofa Compact
            </h5>
            <p className="text-[#B7BACB] font-lato font-normal max-w-134 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <ul className="mt-7 *:flex *:items-center grid grid-cols-2 gap-y-2 text-[#B7BACB] font-lato font-normal *:gap-x-1 text-sm md:text-base mb-9">
              <li>
                <Check className="text-[#7569B2]" />
                <p>Material expose like metals</p>
              </li>
              <li>
                <Check className="text-[#7569B2]" />
                <p>Clear lines and geomatric figures</p>
              </li>
              <li>
                <Check className="text-[#7569B2]" />
                <p>Simple neutral colours</p>
              </li>
              <li>
                <Check className="text-[#7569B2]" />
                <p>Material expose like metals</p>
              </li>
            </ul>

            <LinkButton type={"primary"} to={"/shop"}>
              Shop Now
            </LinkButton>
          </div>
          <div className="right relative before:absolute before:bg-[#FCECF1] before:size-118 before:rounded-full before:z-4 before:top-22 before:right-26">
            <img
              src={DiscountProduct}
              alt="DiscountProduct"
              className="z-5 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
