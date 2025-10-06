import defaultView from "../../assets/shop/shopSetting/clarity_grid-view-solid.svg";
import listView from "../../assets/shop/shopSetting/fa-solid_list.svg";

const ShopSetting = () => {
  return (
    <section className="shopStore mt-30">
      <div className="container">
        <div className="wrapper flexCenter lg:justify-between flex-wrap gap-y-6">
          <div className="left text-left">
            <h3 className="font-josefine font-bold text-xl xl:text-2xl text-featuredDescriptionText">
              Ecommerce Acceories & Fashion item
            </h3>
            <span className="text-heroBannerSubText text-xs">
              About 9,620 results (0.62 seconds)
            </span>
          </div>

          <div className="right flex items-center flex-wrap gap-y-4 gap-x-4 xl:gap-x-6">
            <div className="perPage text-shopSetting flex items-center gap-x-2">
              <span>Per Page:</span>
              <input
                type="number"
                className="w-14 h-7 border-[#E7E6EF] border-1 pl-2 text-sm"
              />
            </div>
            <div className="Sort text-shopSetting flex items-center gap-x-2">
              <span>Sort By:</span>
              <select className="w-24 h-7 border-[#E7E6EF] border-1 pl-1 text-xs">
                <option value="Best Match">Best Match</option>
                <option value="Price Higher">Price Higher</option>
                <option value="Price Lower">Price Lower</option>
              </select>
            </div>
            <div className="view text-shopSetting flex items-center gap-x-2">
              <span>View:</span>
              <button className="cursor-pointer">
                <img src={defaultView} alt="view" />
              </button>
              <button className="cursor-pointer">
                <img src={listView} alt="view" />
              </button>
            </div>
            <input
              type="text"
              className="w-40.5 h-7 border-[#E7E6EF] border-1 pl-2 text-sm placeholder:text-xs placeholder:text-shopSetting"
              placeholder="Search Product"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSetting;
