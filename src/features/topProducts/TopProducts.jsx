import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./TopProductsBulletStyles.css";

import image1 from "../../assets/home/topProducts/image1.png";
import image2 from "../../assets/home/topProducts/image2.png";
import image3 from "../../assets/home/topProducts/image3.png";
import image4 from "../../assets/home/topProducts/image4.png";

import TopProductCard from "./TopProductCard";
import SectionTitle from "../../ui/SectionTitle";

const fakeData = [
  { id: 500, image: image1, title: "Mini LCW Chair", price: "$56.00" },
  { id: 501, image: image2, title: "Mini LCW Chair", price: "$56.00" },
  { id: 502, image: image3, title: "Mini LCW Chair", price: "$56.00" },
  { id: 503, image: image4, title: "Mini LCW Chair", price: "$56.00" },
  { id: 504, image: image2, title: "Mini LCW Chair", price: "$56.00" },
];

const TopProducts = () => {
  return (
    <section className="topCategories mt-20">
      <div className="container">
        <SectionTitle>Top Products</SectionTitle>
        <div className="wrapper mt-14">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass: "T-custom-bullet",
              bulletActiveClass: "T-custom-bullet-active",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {fakeData.map((item) => (
              <SwiperSlide key={item.id}>
                <TopProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
