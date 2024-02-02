"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/_swiper.css";

// import img from "../../public/img/hero.png";
import Image from "next/image";
import { IProduct } from "app/_models/IProduct";

interface IImgArrayProps {
  foundProduct: IProduct | undefined;
}
// export const imgArray = [img, img, img, img];

export default function ImageCarousel({ foundProduct }: IImgArrayProps) {
  return (
    <>
      <section className="image-carousel">
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
              <Image
                src={img}
                alt={`Björby Blomster- ${
                  foundProduct.productTitle + index + 1
                }`}
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
