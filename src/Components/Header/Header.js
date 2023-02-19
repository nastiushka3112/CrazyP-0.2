import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, openBurger } from "../../store/helpers/helpersSlice";
import Hamburger from "hamburger-react";

export default function Header() {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.helpers.burger);

  return (
    <div class="flex items-center justify-between mx-[64px] pt-[20px]">
      <div class="items-center flex">
        <div class="cursor-pointer">
          <a href="/">
            <img src={require("../Theme/Img/logo.png")} alt="Logo" />
          </a>
        </div>
        <div class="lg:flex hidden">
          <ul class="flex items-center gap-8 ml-[80px]">
            <li class="cursor-pointer">
              <a href="/" class="font-main text-white text-lg">
                Anime portrais
              </a>
            </li>
            <li class="cursor-pointer">
              <a href="/" class="font-main text-white text-lg">
                Storybooks
              </a>
            </li>
            <li class="cursor-pointer">
              <a href="/" class="font-main text-white text-lg">
                AI Avatars
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="items-center lg:flex hidden">
        <ul class="flex items-center gap-8">
          <li class="cursor-pointer">
            <a href="/" class="font-main text-white text-lg">
              Blog
            </a>
          </li>
          <li class="cursor-pointer">
            <a href="/" class="font-main text-white text-lg">
              Order tracking
            </a>
          </li>
        </ul>
        <button
          class="btn flex items-center justify-center ml-[32px] "
          onClick={() => {
            dispatch(openModal(true));
          }}
        >
          Get started now
        </button>
      </div>
      <div class="items-center lg:hidden flex">
        <Hamburger
          toggled={burger}
          toggle={() => {
            dispatch(openBurger(!burger));
          }}
          direction="right"
          color="#ffffff"
        />
      </div>
    </div>
  );
}
