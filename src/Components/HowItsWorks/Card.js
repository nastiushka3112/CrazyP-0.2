import React, { useState } from "react";

export default function Card({ name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      class="cursor-pointer flex max-w-[535px] rounded-[16px] border-[2px] border-[#2D061B] bg-regular px-[24px] py-[35px] mx-[24px] my-[20px] "
      onClick={() => {
        setOpen(!open);
      }}
    >
      <h2>{name}</h2>
      {open && <p>{text}</p>}
    </div>
  );
}
