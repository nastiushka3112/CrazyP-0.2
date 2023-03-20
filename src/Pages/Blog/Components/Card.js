import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ post, i, excerptList }) {
  const elementsCounter = (i) => i % 2;
  const CheckHeight = (Big) => (Big ? "550px" : "460px");

  return (
    <div>
      <NavLink to={`/post/${post.id}`}>
        <div
          class="w-[373px] h-[460px] bg-gradient-to-r from-cardElFrom to-cardElTo flex items-end flex-col justify-between text-left rounded-[15px] cursor-pointer"
          style={{
            height: `${CheckHeight(!!elementsCounter(i))}`,
            backgroundImage: `url(${post.thumbnail})`,
          }}
        >
          <div>
            <p class="font-textSec text-[18px] leading-[26px] text-white pt-[19px] pr-[16px]">
              {post.date}
            </p>
          </div>
          <div class="px-[16px] pb-[26px]">
            <h1 class="font-mainText text-white text-[32px] leading-[36px] pb-[9px]">
              {post.title}
            </h1>
            <p class="font-textSec text-[18px] leading-[26px] text-[#999393]">
              {excerptList[i]}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
