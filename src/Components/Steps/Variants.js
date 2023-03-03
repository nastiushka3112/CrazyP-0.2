import React, { useState } from "react";

export default function Variants({ text }) {
  const [active, setActive] = useState(false);
  return (
    <div>
      {active ? (
        <div
          class="cursor-pointer border-[1px] border-regular bg-regular rounded-[100px] px-[16px] py-[8px]"
          onClick={() => {
            setActive(!active);
          }}
        >
          <p class="font-textSec text-white text-[12px]"> {text}</p>
        </div>
      ) : (
        <div
          class="cursor-pointer border-[1px] border-regular rounded-[100px] px-[16px] py-[8px]"
          onClick={() => {
            setActive(!active);
          }}
        >
          <p class="font-textSec text-text-color text-[12px]"> {text}</p>
        </div>
      )}
    </div>
  );
}
