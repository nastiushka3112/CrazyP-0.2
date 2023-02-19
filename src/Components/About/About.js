import React from "react";

export default function About() {
  return (
    <div class="flex justify-between  pr-[67px] mt-[104px] mb-[64px]">
      <div class="ml-[10%]">
        <img src={require("../Theme/Img/Samurai1.png")} alt="samurai" />
      </div>
      <div class="max-w-[720px]">
        <h2 class="font-about text-regular text-[64px] leading-[77px] mb-[24px]">
          About
        </h2>
        <p class="font-main text-[20px] pb-[20px] text-white ">
          CrazyPrints is an innovative storybook creator that uses AI technology
          to create personalized, one-of-a-kind books for children and adults
          alike. Our mission is to help people become the hero of their own
          story by creating books that are tailored to their interests and
          preferences.
        </p>
        <p class="font-main text-[20px] pb-[20px] text-white">
          Our team of developers and illustrators have worked tirelessly to
          perfect our AI algorithms, which generate unique stories and
          illustrations that are completely personalized to each user. Our
          high-quality printing ensures that every book we create is a keepsake
          that can be treasured for years to come.
        </p>
        <p class="font-main text-[20px] text-white">
          At CrazyPrints, we believe that every person has a unique story to
          tell, and we are dedicated to helping them tell it in the most
          beautiful and personalized way possible. We are constantly updating
          and improving our technology to bring you the best possible
          experience. So why wait? Get started on your own personalized
          storybook today and become the hero of your own story with
          CrazyPrints!
        </p>
      </div>
    </div>
  );
}
