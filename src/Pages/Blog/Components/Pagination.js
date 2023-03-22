import React, { useState, useEffect } from "react";
import { setPagination } from "../../../store/helpers/helpersSlice";
import { useDispatch, useSelector } from "react-redux";
import Next from "../../../Components/Theme/Icons/Next";

export default function Pagination({ elements }) {
  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(4);
  const dispatch = useDispatch();
  const activeP = useSelector((state) => state.helpers.pagination);

  const Arr = [];

  const summPages = () => {
    const a = elements / 12;
    return Math.ceil(a);
  };

  useEffect(() => {
    if (activeP === toPage && activeP !== summPages()) {
      setToPage(toPage + 3);
      setFromPage(fromPage + 3);
    } else if (activeP === fromPage && activeP !== 1) {
      setToPage(toPage - 3);
      setFromPage(fromPage - 3);
    }
  }, [activeP]);

  for (let i = 1; i <= summPages(); i++) {
    Arr.push(i);
  }

  console.log(summPages(), toPage, toPage - 1);

  const Numbers = (num) => {
    return (
      <div
        onClick={() => {
          dispatch(setPagination(num));
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
  };

  return (
    <div class="flex gap-[8px] justify-center">
      {activeP !== 1 && (
        <div
          style={{ transform: "rotate(180deg)" }}
          class="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer"
          onClick={() => {
            dispatch(setPagination(activeP - 1));
          }}
        >
          <div class="text-mainText text-[#433E3E] text-[32px]">
            <Next />
          </div>
        </div>
      )}
      {Arr.slice(fromPage, toPage).map((el) => Numbers(el))}
      {toPage !== summPages() && summPages() >= toPage - 1 && (
        <div
          onClick={() => {
            setToPage(toPage + 4);
          }}
          class="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer"
        >
          <p class="text-mainText text-[#433E3E] text-[32px]">...</p>
        </div>
      )}
      {activeP !== summPages() && (
        <div
          onClick={() => {
            dispatch(setPagination(activeP + 1));
          }}
          class="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer"
        >
          <div class="text-mainText text-[#433E3E] text-[32px]">
            <Next />
          </div>
        </div>
      )}
    </div>
  );
}
