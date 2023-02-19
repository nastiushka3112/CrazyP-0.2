import React from "react";

export default function ShowCase() {
  return (
    <div class="flex justify-center items-center mt-[200px]">
      <div class="bg-showcase bg-cover w-[1090px] h-[380px] flex justify-between items-center pl-[64px] pr-[32px] pt-[91px]">
        <div class="max-w-[582px]">
          <h2 class="text-[#FFFFFF] text-[64px] font-about">Showcase</h2>
          <p class="text-[#FFFFFF] text-[20px] font-main">
            Here, you can see examples of the personalized storybooks that we
            have created for our satisfied customers. Get a sense of the variety
            and quality of the books we create, and see the possibilities for
            the personalized storybook of your own.
          </p>
        </div>
        <div>
          <img
            class="w-[338px] h-[257px]"
            src={require("../Theme/Img/Scene.png")}
            alt="Scene"
          />
        </div>
      </div>
    </div>
  );
}
