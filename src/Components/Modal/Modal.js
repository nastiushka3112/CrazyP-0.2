import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";

export default function Modal({ Name, Brif, Ganre }) {
  const dispatch = useDispatch();
  return (
    <div
      class="bg-modal top-0 left-0 w-[100%] h-[100%] block fixed"
      onClick={(e) => {
        dispatch(openModal(false));
      }}
    >
      <div
        class="bg-[#FFFFFF] rounded-[32px] w-[420px] h-[596px] fixed top-[10%] left-[35%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="flex flex-col items-center justify-center">
          <div class="rounded-[32px]">
            <img
              class="w-[388px] h-[390px] pt-[12px] rounded-[32px]"
              src={require("../Theme/Img/variant2img.png")}
              alt="car"
            />
          </div>
          <div class="text-center">
            <h2 class="pt-[24px] text-[20px] font-main pb-[16px]">{Name}</h2>
            <p class="pb-[13px] text-[18px] font-main">{Brif}</p>
            <p class="pb-[72px] text-[18px] font-main">{Ganre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
