import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const page = useSelector((state) => state.helpers.page);
  return (
    <div>
      <ul class="flex items-center gap-8 m-[2%] flex-col">
        {page == "create" ? (
          <li class="cursor-pointer border-2 border-regular   w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <a href="/create" class="font-main text-white text-lg  ">
              Storybooks
            </a>
          </li>
        ) : (
          <li class="cursor-pointer bg-regular  w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <a href="/create" class="font-main text-text-color text-lg  ">
              Storybooks
            </a>
          </li>
        )}
        <li class="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px] ">
          <a href="/" class="font-main text-text-color text-lg  ">
            Anime portrais
          </a>
        </li>
        <li class="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-text-color text-lg  ">
            AI Avatars
          </a>
        </li>
        {page == "blog" ? (
          <li class="cursor-pointer border-2 border-regular   w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <NavLink to={"/blog"}>
              <p class="font-main text-text-color text-lg">Blog</p>
            </NavLink>
          </li>
        ) : (
          <li class="cursor-pointer bg-regular  w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
            <NavLink to={"/blog"}>
              <p class="font-main text-text-color text-lg">Blog</p>
            </NavLink>
          </li>
        )}
        <li class="cursor-pointer bg-regular w-[100%] flex rounded-[199px] justify-center items-center h-[50px]">
          <a href="/" class="font-main text-text-color text-lg">
            Order tracking
          </a>
        </li>
      </ul>
    </div>
  );
}
