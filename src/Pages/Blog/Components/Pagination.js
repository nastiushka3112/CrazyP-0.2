import React, { useState } from "react";

export default function Pagination({ num }) {
  const [activeP, setActiveP] = useState(1);

  return (
    <div
      onClick={() => {
        setActiveP(num);
      }}
    >
      {activeP === num ? (
        <div class="bg-main-color w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer">
          <p class="text-mainText text-regular text-[32px]">{num}</p>
        </div>
      ) : (
        <div class="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer">
          <p class="text-mainText text-[#433E3E] text-[32px]">{num}</p>
        </div>
      )}
    </div>
  );
}
