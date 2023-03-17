import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/helpers/helpersSlice";

const data = [
  {
    data: "March 6, 2023",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis... ",
  },
  {
    data: "March 6, 2023",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis... ",
  },
  {
    data: "March 6, 2023",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis... ",
  },
  {
    data: "March 6, 2023",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis... ",
  },
];

export default function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("blog"));
  }, []);

  return (
    <div class="">
      <div class="bg-blogBg bg-cover h-[30%] flex justify-center text-center items-center h-[274px]">
        <div class="text-center">
          <h1 class="font-mainText text-regular text-[32px] leading-[36px]">
            The Crazy Prints blog
          </h1>
          <p class="font-textSec text-[18px] leading-[26px] text-white">
            News, views, case studies and ideas to help you along in the world
            of tech
          </p>
        </div>
      </div>
      <div>
        <div class="flex flex-wrap gap-[32px] px-[5%] pt-[100px] pb-[201px]">
          {data.map((el) => (
            <div class="w-[373px] h-[460px] bg-slate-600 flex items-end flex-col justify-between text-left rounded-[15px] cursor-pointer">
              <div>
                <p class="font-textSec text-[18px] leading-[26px] text-white pt-[19px] pr-[16px]">
                  {el.data}
                </p>
              </div>
              <div class="px-[16px] pb-[26px]">
                <h1 class="font-mainText text-white text-[32px] leading-[36px] pb-[9px]">
                  {el.name}
                </h1>
                <p class="font-textSec text-[18px] leading-[26px] text-[#999393]">
                  {el.info}
                </p>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}
