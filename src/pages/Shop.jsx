import BreadCrumb from "../ui/breadCrumb/BreadCrumb";
import ShopSetting from "../features/shopSetting/ShopSetting";
import Store from "../features/store/Store";

const Shop = () => {
  return (
    <main>
      <BreadCrumb />
      <ShopSetting />
      <Store />
    </main>
  );
};

export default Shop;
