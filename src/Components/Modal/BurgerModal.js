import React from "react";

export default function BurgerModal() {
  return (
    <div class="w-[100%] h-[500px] absolute bg-main-color mt-[85px] flex justify-center flex-col">
      <ul class="flex items-center gap-8 m-[2%] flex-col">
        <li class="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px] ">
          <a href="/" class="font-main text-text-color text-lg  ">
            Anime portrais
          </a>
        </li>
        <li class="cursor-pointer bg-regular  w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-text-color text-lg  ">
            Storybooks
          </a>
        </li>
        <li class="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-text-color text-lg  ">
            AI Avatars
          </a>
        </li>
        <li class="cursor-pointer bg-regular  w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-text-color text-lg">
            Blog
          </a>
        </li>
        <li class="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-text-color text-lg">
            Order tracking
          </a>
        </li>
      </ul>
    </div>
  );
}
