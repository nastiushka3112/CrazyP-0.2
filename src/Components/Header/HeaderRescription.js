import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/helpers/helpersSlice";

export default function HeaderRescription() {
  const dispatch = useDispatch();
  return (
    <div class="flex items-center flex-col  justify-center mx-[20%] mt-[200px] pb-[212px] ">
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
      <button
        class="btn flex items-center justify-center"
        onClick={() => {
          dispatch(openModal(true));
        }}
      >
        Get started now!
      </button>
    </div>
  );
}
