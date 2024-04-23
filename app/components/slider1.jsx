"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import slider1Array from "../slider1Array";

export default function Slider1() {

  function generateSlides() {
    return slider1Array.map((item, index) => (
      <SwiperSlide>
<div className="w-[400px] h-[480px] border border-black"></div>
      </SwiperSlide>
    ));
  }

  return (
    <div className="bg-white">
      <Swiper
        modules={[Virtual, Navigation, Autoplay]}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        navigation={true}
        virtual
      >
        {generateSlides()}
      </Swiper>
    </div>
  );
}
