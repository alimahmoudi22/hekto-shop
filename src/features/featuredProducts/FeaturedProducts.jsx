import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./FeaturedBulletStyles.css";

import FeaturedProductCard from "./FeaturedProductCard";

import SectionTitle from "../../ui/SectionTitle";

import image1 from "../../assets/home/FeaturedProducts/image1.png";
import image2 from "../../assets/home/FeaturedProducts/image2.png";
import image3 from "../../assets/home/FeaturedProducts/image3.png";
import image4 from "../../assets/home/FeaturedProducts/image4.png";

const FeaturedProducts = () => {
  const [data] = useState([
    {
      id: 1,
      image: image1,
      title: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
    },
    {
      id: 2,
      image: image2,
      title: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
    },
    {
      id: 3,
      image: image3,
      title: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
    },
    {
      id: 4,
      image: image4,
      title: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
    },
    {
      id: 5,
      image: image2,
      title: "Cantilever chair",
      code: "Y523201",
      price: "42.00",
    },
  ]);

  return (
    <section className="featuredProducts mt-30">
      <div className="container">
        <SectionTitle>Featured Products</SectionTitle>
        <div className="wrapper mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass: "F-custom-bullet",
              bulletActiveClass: "F-custom-bullet-active",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <FeaturedProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
