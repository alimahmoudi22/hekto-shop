import offBG from "../../assets/home/heroBanner/offBG.svg";

const OffLable = () => {
  return (
    <div className="absolute hidden items-center justify-center z-6 right-[-5rem] 2xl:flex">
      <div className="relative">
        <img src={offBG} alt="off-background" className="z-6" />
        <span className="absolute top-8 left-8 font-josefin font-bold text-4xl text-white text-center">
          50%
          <br />
          off
        </span>
      </div>
    </div>
  );
};

export default OffLable;
