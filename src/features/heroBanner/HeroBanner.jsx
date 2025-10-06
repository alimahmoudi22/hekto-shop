import LinkButton from "../../ui/LinkButton";

import chair from "../../assets/home/heroBanner/chair.png";
import louster from "../../assets/home/heroBanner/louster.png";

import OffLable from "./OffLable";

const HeroBanner = () => {
  return (
    <section className="bg-heroBannerBG relative">
      <div className="container flex items-center justify-center pt-25 pb-9 flex-wrap-reverse gap-6 xl:justify-between">
        <div className="flex flex-col justify-center items-center text-center xl:text-left xl:items-start">
          <h5 className="text-headerPink font-bold">
            Best Furniture For Your Castle....
          </h5>
          <h1 className="my-3 font-josefin font-bold text-2xl lg:text-3xl xl:max-w-131 xl:text-4xl">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="font-bold text-heroBannerSubText mb-7 max-w-128 text-xs md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <LinkButton to={"/product/:id"} type={"primary"}>
            Shop Now
          </LinkButton>
        </div>

        <div className="relative z-5 flex">
          <img
            src={chair}
            alt="Wooden armchair with cushions"
            className="z-10 object-fill"
          />
          <div className="size-152 bg-heroBannerCircles/35 rounded-full absolute bottom-2 z-4 2xl:size-162 hidden md:block"></div>
          <div className="size-152 bg-heroBannerCircles/35 rounded-full absolute bottom-4 left-14 z-4 2xl:size-162 hidden md:block"></div>
          <OffLable />
        </div>
      </div>

      <div className="absolute top-0 left-12 hidden xl:block w-68 3xlLouster:w-auto">
        <img src={louster} alt="Hanging lamp fixture" />
      </div>

      <div className="absolute bg-headerPink size-4 rounded-full  bottom-56 left-46 hidden 3xlLouster:block"></div>
    </section>
  );
};

export default HeroBanner;
