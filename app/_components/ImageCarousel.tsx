"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/_swiper.css";

import Image from "next/image";
import { IProduct } from "app/_models/IProduct";

interface IImgArrayProps {
  foundProduct: IProduct | undefined;
}

export default function ImageCarousel({ foundProduct }: IImgArrayProps) {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-black sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 ">
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
          {foundProduct?.productImagesUrl.map((img, index) => (
            <SwiperSlide key={foundProduct.productId + index}>
              <div className="swiper-image-container">
                <Image
                  src={img}
                  alt={`Björby Blomster- ${
                    foundProduct.productTitle + index + 1
                  }`}
                  width={300}
                  height={200}
                  className="swiper-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
