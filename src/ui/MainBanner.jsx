import LinkButton from "./LinkButton";
import chair from "../assets/home/mainBanner/chair.png";
import louster from "../assets/home/mainBanner/louster.png";
import OffLable from "./OffLable";

const MainBanner = () => {
  return (
    <section className="bg-mainBannerBG relative">
      <div className="container flex items-center justify-center pt-25 pb-9 flex-wrap-reverse gap-6 xl:justify-between">
        <div className="flex flex-col justify-center text-center xl:text-left">
          <h5 className="text-headerPink font-bold ">
            Best Furniture For Your Castle....
          </h5>
          <h1 className="font-josefin font-bold text-[40px] my-3 max-w-131">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="font-bold text-mainBannerSubText mb-7 max-w-128">
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
            className="z-10"
          />
          <div className="size-152 bg-mainBannerCircles/35 rounded-full absolute bottom-2 z-4 2xl:size-162 hidden md:block"></div>
          <div className="size-152 bg-mainBannerCircles/35 rounded-full absolute bottom-4 left-14 z-4 2xl:size-162 hidden md:block"></div>
          <OffLable />
        </div>
      </div>
      <div className="absolute top-0 left-12 hidden 2xl:block">
        <img src={louster} alt="Hanging lamp fixture" />
      </div>
      <div className="absolute bg-headerPink size-4 rounded-full  bottom-56 left-46 hidden 2xl:block"></div>
    </section>
  );
};

export default MainBanner;
