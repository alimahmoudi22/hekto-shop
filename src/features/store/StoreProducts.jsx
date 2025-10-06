import StoreItemDefault from "./StoreItemDefault";
import StoreItemList from "./StoreItemList";

import image1 from "../../assets/shop/store/image1.png";
import image2 from "../../assets/shop/store/image2.png";
import image3 from "../../assets/shop/store/image3.png";
import image4 from "../../assets/shop/store/image4.png";
import image5 from "../../assets/shop/store/image5.png";
import image6 from "../../assets/shop/store/image6.png";
import image7 from "../../assets/shop/store/image7.png";
import image8 from "../../assets/shop/store/image8.png";
import image9 from "../../assets/shop/store/image9.png";
import image10 from "../../assets/shop/store/image10.png";
import image11 from "../../assets/shop/store/image11.png";
import image12 from "../../assets/shop/store/image12.png";

const fakeData = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const StoreProducts = () => {
  return (
    <div className="products">
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-12 gap-y-20 ">
        {fakeData.map((item) => (
          <StoreItemDefault key={crypto.randomUUID()} image={item} />
        ))}
      </div>

      {/* <div className="flex flex-col items-start gap-8">
        {fakeData.map((item) => (
          <StoreItemList key={crypto.randomUUID()} image={item} />
        ))}
      </div> */}
    </div>
  );
};

export default StoreProducts;
