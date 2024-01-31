"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/_swiper.css";

import img from "../../public/img/hero.png";
import Image from "next/image";

const imgArray = [img, img, img, img];

export default function ImageCarousel() {
  return (
    <>
      <section className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation, A11y]}
          a11y={{ enabled: true }}
          className="mySwiper"
        >
          {imgArray.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
