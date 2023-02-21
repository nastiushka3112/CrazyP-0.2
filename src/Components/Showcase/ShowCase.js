import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";
import { Pagination } from "swiper";

export default function ShowCase() {
  return (
    <div class="flex justify-center items-center mt-[200px]">
      <div class="bg-showcase bg-cover w-[100%] h-[565px] flex justify-between rounded-[24px] items-center pl-[64px] pr-[32px] pt-[91px]">
        <div class="max-w-[582px]">
          <h2 class="text-[#FFFFFF] text-[64px] font-about">Showcase</h2>
          <p class="text-[#FFFFFF] text-[20px] font-main">
            Here, you can see examples of the personalized storybooks that we
            have created for our satisfied customers. Get a sense of the variety
            and quality of the books we create, and see the possibilities for
            the personalized storybook of your own.
          </p>
        </div>
        <div class="w-[338px] h-[90%]">
          <Swiper
            pagination={true}
            bulletClass="activeBullet"
            bulletActiveClass="activeBullet"
            dynamicMainBullets={5}
            dynamicBullets={true}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img
                class="w-[255px] h-[369px]"
                src={require("../Theme/Img/Scene.png")}
                alt="Scene"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                class="w-[255px] h-[369px]"
                src={require("../Theme/Img/35795.png")}
                alt="Scene"
              />
            </SwiperSlide>
            <SwiperSlide>33333</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
