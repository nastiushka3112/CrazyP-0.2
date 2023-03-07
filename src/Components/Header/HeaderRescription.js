import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";
import { NavLink } from "react-router-dom";

export default function HeaderRescription() {
  const dispatch = useDispatch();
  return (
    <div class="flex items-center flex-col  justify-center mx-[20%] max-[420px]:mx-[5%] pt-[200px] pb-[212px] ">
      <h1 class="mb-[24px] font-mainText text-text-color text-[48px] leading-[53px] text-center">
        Become The Hero Of Your Own Story \n with our AI-powered storybook
        creator
      </h1>
      <p class="mb-[24px] font-main text-text-color text-[24px] mx-[5%] leading-[29px] text-center">
        With CrazyPrints, you can create custom stories that are tailored to
        your interests and preferences. Our AI algorithms generate unique
        stories and illustrations that are personalised to you, ensuring that no
        two books are alike. And with our high-quality printing, your book will
        be a keepsake to treasure for years to come.
      </p>
      <div class="flex items-center gap-[24px]">
        <button
          class="btn-second flex items-center justify-center"
          onClick={() => {
            // dispatch(openModal(true));
          }}
        >
          Learn More
        </button>
        <NavLink to={"/create"}>
          <button
            class="btn flex items-center justify-center "
            // onClick={() => {
            //   dispatch(openModal(true));
            // }}
          >
            Start to Create a Book
          </button>
        </NavLink>
      </div>
    </div>
  );
}
