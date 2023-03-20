import React, { useState } from "react";
import { setPagination } from "../../../store/helpers/helpersSlice";
import { useDispatch, useSelector } from "react-redux";
import Next from "../../../Components/Theme/Icons/Next";

export default function Pagination({ elements }) {
  // const [activeP, setActiveP] = useState(1);
  const dispatch = useDispatch();
  const activeP = useSelector((state) => state.helpers.pagination);

  const Arr = [1, 2, 3, 4, 5, 6];

  const summPages = () => {
    const a = elements / 12;
    return Math.ceil(a);
  };
  console.log(summPages(), elements);

  const Numbers = (num) => {
    return (
      <div
        onClick={() => {
          dispatch(setPagination(num));
        }}
      >
        {activeP == num ? (
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
  };

  return (
    <div class="flex gap-[8px] justify-center">
      {Arr.slice(0, 4).map((el) => Numbers(el))}
      <div class="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer">
        <p class="text-mainText text-[#433E3E] text-[32px]">...</p>
      </div>
      <div class="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer">
        <p
          class="text-mainText text-[#433E3E] text-[32px]"
          onClick={() => {
            dispatch(setPagination(activeP + 1));
          }}
        >
          <Next />
        </p>
      </div>
    </div>
  );
}
