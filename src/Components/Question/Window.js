import React, { useState } from "react";
import MinusIco from "../Theme/Icons/Minus";
import PlusIco from "../Theme/Icons/PlusIco";

export default function Window({ name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div class="flex max-w-[643px] rounded-[20px]  bg-regular px-[24px] py-[35px] mx-[24px] my-[20px] ">
      <div class="flex flex-col">
        <h2 class="font-mainText text-[20px] text-main-color">{name}</h2>
        {open && (
          <p class="font-textSec text-[18px] max-w-[380px] text-white">
            {text}
          </p>
        )}
      </div>
      <div
        class="cursor-pointer ml-[109px]"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <MinusIco /> : <PlusIco />}
      </div>
    </div>
  );
}
