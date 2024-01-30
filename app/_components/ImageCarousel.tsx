"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/_swiper.css";

import img from "../../public/img/hero.png";
import Image from "next/image";

const imgArray = [img, img, img];

export default function ImageCarousel() {
  useEffect(() => {
    const handlePaginationKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        const button = event.target as HTMLButtonElement;
        button.click();
      }
    };

    const paginationButtons = document.querySelectorAll<HTMLButtonElement>(
      ".swiper-pagination-bullet"
    );

    paginationButtons.forEach((button) => {
      button.tabIndex = 0;
      button.addEventListener("keydown", handlePaginationKeyPress);
      button.setAttribute("role", "button");
      button.setAttribute("aria-label", "Go to slide");
    });

    const handleNavigationKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        const button = event.target as HTMLButtonElement;
        button.click();
      }
    };

    const navigationButtons = document.querySelectorAll<HTMLButtonElement>(
      ".swiper-button-prev, .swiper-button-next"
    );

    navigationButtons.forEach((button) => {
      button.tabIndex = 0;
      button.addEventListener("keydown", handleNavigationKeyPress);
      button.setAttribute("role", "button");
      button.setAttribute(
        "aria-label",
        button.classList.contains("swiper-button-prev")
          ? "Föregående Slide"
          : "Nästa Slide"
      );
    });

    return () => {
      paginationButtons.forEach((button) => {
        button.removeEventListener("keydown", handlePaginationKeyPress);
      });

      navigationButtons.forEach((button) => {
        button.removeEventListener("keydown", handleNavigationKeyPress);
      });
    };
  }, []);

  return (
    <>
      <section className="h-screen">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {imgArray.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={300}
                height={200}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
