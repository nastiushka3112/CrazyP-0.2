import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../store/helpers/helpersSlice";

export default function Step2() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.helpers.step);
  return (
    <div class="items-start pb-[166px]">
      <div class="w-[550px] pb-[32px] left-0">
        <div class="flex flex-col gap-[10px] start pb-[17px]">
          <h2 class="font-textSec text-text-color text-[20px]">
            Your Favorite Character
          </h2>
          <p class="font-textSec text-text-color text-[12px]">
            Example: Harry Potter, Sherlock Holmes
          </p>
        </div>
        <input
          type="text"
          placeholder="Favorite Character"
          class="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
        />
      </div>
      <div class="flex justify-between">
        <button
          onClick={() => {
            dispatch(setStep(step - 1));
          }}
          class="text-regular text-[18px] text-textSec"
        >
          Back
        </button>
        <button
          class="btn flex items-center"
          onClick={() => {
            dispatch(setStep(step + 1));
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
