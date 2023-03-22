import React, { useState } from "react";
import { setPagination } from "../../../store/helpers/helpersSlice";
import { useDispatch, useSelector } from "react-redux";
import Next from "../../../Components/Theme/Icons/Next";

export default function Pagination({ elements }) {
  const [fromPage, setFromPage] = useState(0);
  const dispatch = useDispatch();
  const activeP = useSelector((state) => state.helpers.pagination);

  const Arr = [];
	
  const summPages = () => {
    const a = elements / 12;
    return Math.ceil(a);
  };

	if(summPages() > 4) {
		setFromPage(fromPage + 1)
	}

	for (let i = 1; i <= summPages(); i++){
		Arr.push(i)
	}

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
      {Arr.slice(fromPage, summPages()).map((el) => Numbers(el))}
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
