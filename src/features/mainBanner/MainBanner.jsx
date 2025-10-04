import ProductImage from "../../assets/home/mainBanner/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";
import Elipse from "../../assets/home/mainBanner/Ellipse 63.svg";

import MainBannerDetails from "./MainBannerDetails";
import LinkButton from "../../ui/LinkButton";

const MainBanner = () => {
  return (
    <section className="mainBanner mt-30 bg-mainBannerBG text-featuredDescriptionText">
      <div className="container">
        <div className="wrapper flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-x-1 flex-wrap pl-20 pr-15">
          <div className="left relative z-10">
            <img
              src={ProductImage}
              alt="ProductImage"
              className="z-10 relative"
            />
            <img
              src={Elipse}
              alt="mainBanner Bg"
              className="absolute top-9 right-18"
            />
          </div>

          <div className="right">
            <h3 className="font-josefin font-bold lg:max-w-127 text-xl md:text-2xl lg:text-3xl leading-10 xl:text-4xl xl:leading-12 text-center lg:text-left">
              Unique Features Of leatest & Trending Poducts
            </h3>

            <MainBannerDetails />

            <div className="Buy flex items-center gap-x-5 mt-9 mb-10">
              <LinkButton type={"primary"} to={"/shop"}>
                Shop Now
              </LinkButton>
              <div className="price">
                <p className="font-josefine font-semibold text-sm">
                  B&B Italian Sofa
                </p>
                <span className="font-lato font-semibold text-sm text-featuredDescriptionText">
                  $32.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
