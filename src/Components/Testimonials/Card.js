import React from "react";

export default function Card({ text }) {
  return (
    <div class="flex flex-col justify-center items-center mt-[64px] pb-[100px] cursor-pointer">
      <div class="w-[612px] h-[383px] bg-regular shadow-card-shadow backdrop-blur-[30px] rounded-[20px] flex  justify-center items-center px-[84px]">
        <p class="text-text-color text-[20px] font-textSec">{text}</p>
      </div>
    </div>
  );
}
