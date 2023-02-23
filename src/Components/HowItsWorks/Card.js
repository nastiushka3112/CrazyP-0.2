import React, { useState } from "react";

export default function Card({ name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      class="cursor-pointer flex flex-col min-[1390px]:w-[535px] rounded-[16px] border-[2px] border-[#2D061B] bg-regular px-[24px] py-[35px] mx-[24px] my-[20px] "
      onClick={() => {
        setOpen(!open);
      }}
    >
      <h2 class="text-main-color text-[36px] font-second">{name}</h2>
      {open && <p class="text-[#F2ECEC] text-[16px] font-main">{text}</p>}
    </div>
  );
}
