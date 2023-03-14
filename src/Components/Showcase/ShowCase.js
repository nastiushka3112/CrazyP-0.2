import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Style.css";
import { Pagination } from "swiper";

export default function ShowCase() {
  return (
    <div class="flex justify-center items-center mt-[200px] max-[420px]:mb-[400px] relative">
      <div class="bg-showcase  bg-cover max-[420px]:mt-[266px] max-[420px]:absolute max-[420px]:w-[1440px] max-[420px]:h-[812px] w-[100%] h-[565px] flex justify-between max-[420px]:flex-col max-[420px]:px-[5%] rounded-[24px] max-[420px]:rounded-[0px] items-center sm:pl-[64px] pr-[32px] pt-[91px]">
        <div class="max-w-[582px] max-[420px]:mt-[100px] max-[420px]:w-[400px]  max-[420px]:px-[2%]">
          <h2 class="text-main-color text-[48px] max-[420px]:text-[24px] font-mainText">
            Showcase
          </h2>
          <p class="text-[#FFFFFF] text-[20px] max-[420px]:text-[12px] font-textSec">
            Here, you can see examples of the personalized storybooks that we
            have created for our satisfied customers. Get a sense of the variety
            and quality of the books we create, and see the possibilities for
            the personalized storybook of your own.
          </p>
        </div>
        <div class="w-[338px] h-[90%]  max-[420px]:mt-[32px]  max-[420px]:ml-[2%]">
          <Swiper
            pagination={{
              el: ".pagination",
              type: "bullets",
              clickable: true,
              bulletClass: "bullet",
              bulletActiveClass: "activeBullet",
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img
                class="w-[255px] h-[369px]"
                src={require("../Theme/Img/35795.png")}
                alt="Scene"
              />
            </SwiperSlide>
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
            <SwiperSlide>Slide 5</SwiperSlide>
            <div className="pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
