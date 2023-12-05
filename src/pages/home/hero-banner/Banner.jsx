/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="lg:h-[500px] w-[100%] h-350 object-cover rounded-lg"
            src={banner1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-[500px] w-[100%] h-350 object-cover rounded-lg"
            src={banner2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-[500px] w-[100%] h-350 object-cover rounded-lg"
            src={banner3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-[500px] w-[100%] h-350 object-cover rounded-lg"
            src={banner4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-[500px] w-[100%] h-350 object-cover rounded-lg"
            src={banner5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-[500px] w-[100%] h-350 object-cover rounded-lg"
            src={banner6}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
