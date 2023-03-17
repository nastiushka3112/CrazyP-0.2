import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/helpers/helpersSlice";
import postlist from "../../posts.json";
import { NavLink } from "react-router-dom";

export default function Blog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("blog"));
  }, []);

  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });

  return (
    <div class="">
      <div class="bg-blogBg bg-cover h-[274px] flex justify-center text-center items-center">
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
          {postlist.length &&
            postlist.map((post, i) => (
              <NavLink to={`/post/${post.id}`}>
                <div
                  class="w-[373px] h-[460px] bg-gradient-to-r from-cardElFrom to-cardElTo flex items-end flex-col justify-between text-left rounded-[15px] cursor-pointer"
                  style={{
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
            ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}
