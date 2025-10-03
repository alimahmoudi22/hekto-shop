import LinkButton from "./LinkButton";
import chair from "../assets/home/mainBanner/chair.png";
import louster from "../assets/home/mainBanner/louster.png";
import OffLable from "./OffLable";

const MainBanner = () => {
  return (
    <section className="h-191 bg-mainBannerBG pl-91 pr-60 relative">
      <div className="flex items-center justify-between h-full">
        <div className="flex flex-col justify-center">
          <h5 className="text-headerPink font-bold ">
            Best Furniture For Your Castle....
          </h5>
          <h1 className="font-josefin font-bold text-[53px] my-3 max-w-161">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="font-bold text-mainBannerSubText mb-7 max-w-140">
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
          <div className="size-162 bg-mainBannerCircles/35 rounded-full absolute bottom-2 z-4"></div>
          <div className="size-162 bg-mainBannerCircles/35 rounded-full absolute bottom-4 left-14 z-4"></div>
          <OffLable />
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <img src={louster} alt="Hanging lamp fixture" />
      </div>
      <div className="bg-headerPink size-4 rounded-full absolute bottom-56 left-36 "></div>
    </section>
  );
};

export default MainBanner;
