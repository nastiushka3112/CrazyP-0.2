import React from "react";

export default function BurgerModal() {
  return (
    <div class="w-[100%] h-[500px] absolute bg-[#2F5059]">
      <ul class="flex items-center gap-8 m-[2%] flex-col">
        <li class="cursor-pointer bg-[#4E9C7F] w-[100%] flex rounded-[199px] justify-center items-center h-[50px] ">
          <a href="/" class="font-main text-white text-lg  ">
            Anime portrais
          </a>
        </li>
        <li class="cursor-pointer bg-[#4E9C7F] w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-white text-lg  ">
            Storybooks
          </a>
        </li>
        <li class="cursor-pointer bg-[#4E9C7F] w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-white text-lg  ">
            AI Avatars
          </a>
        </li>
        <li class="cursor-pointer bg-[#4E9C7F] w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-white text-lg">
            Blog
          </a>
        </li>
        <li class="cursor-pointer bg-[#4E9C7F] w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-white text-lg">
            Order tracking
          </a>
        </li>
      </ul>
    </div>
  );
}
