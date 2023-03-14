import React from "react";

export default function Card({ text }) {
  return (
    <div class="flex flex-col justify-center items-center mt-[64px] max-[420px]:mt-[32px] pb-[100px] cursor-pointer">
      <div class="w-[612px] max-[420px]:h-[160px]   max-[420px]:w-[90%] h-[383px] bg-regular shadow-card-shadow backdrop-blur-[30px] rounded-[20px] flex  justify-center items-center px-[84px] max-[420px]:px-[42px]">
        <p class="text-text-color text-[20px] max-[420px]:text-[12px] font-textSec">
          {text}
        </p>
      </div>
    </div>
  );
}
