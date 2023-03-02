import React from "react";

export default function Benefits() {
  return (
    <div class="pt-[100px] flex flex-col justify-center items-center w-[95%]">
      <div class="flex flex-col justify-center items-center  max-w-[883px]">
        <h2 class="font-about text-regular-blue text-[64px] leading-[77px] mb-[24px] ">
          Benefits
        </h2>
        <p class="font-main text-[20px] text-center">
          At CrazyPrints, we offer many benefits to our customers that set us
          apart from traditional storybook creators. Here are just a few of the
          many advantages of using our AI-powered storybook creator:
        </p>
      </div>
      <div class="flex m-[64px] xl:flex-row flex-col">
        <div class="flex items-center flex-col">
          <div class="flex flex-col items-start mb-[40px] w-[425px] py-[44px] px-[32px] gap-[16px] rounded-[30px] divide-[#7AB59F] border-[3px]">
            <h2 class="font-main text-[32px]">Personalization: </h2>
            <p class="font-main text-[20px]">
              Our AI algorithms generate unique stories and illustrations that
              are tailored to your interests and preferences, ensuring that your
              book is one-of-a-kind and truly special.
            </p>
          </div>
          <div class="flex flex-col items-start mb-[40px] w-[425px] py-[44px] px-[32px] gap-[16px] rounded-[30px] divide-[#7AB59F] border-[3px]">
            <h2 class="font-main text-[32px]">High-Quality Printing:</h2>
            <p class="font-main text-[20px]">
              We use only the best materials and printing techniques to ensure
              that your book is a beautiful and durable keepsake that will last
              for years to come.
            </p>
          </div>
          <div class="flex flex-col items-start mb-[40px] w-[425px] py-[44px] px-[32px] gap-[16px] rounded-[30px] divide-[#7AB59F] border-[3px]">
            <h2 class="font-main text-[32px]">Customer Service:</h2>
            <p class="font-main text-[20px]">
              Our team is dedicated to providing excellent customer service and
              is always happy to help with any questions or concerns you may
              have.
            </p>
          </div>
        </div>
        <div class="items-center flex-col xl:flex  hidden">
          <img
            class="max-w-[none] mx-[50px]"
            src={require("../Theme/Img/image-5.png")}
            alt="Benefits"
          />
        </div>
        <div class="flex items-center flex-col">
          <div class="flex flex-col items-start mb-[40px] w-[425px] py-[44px] px-[32px] gap-[16px] rounded-[30px] divide-[#7AB59F] border-[3px]">
            <h2 class="font-main text-[32px]"> Variety: </h2>
            <p class="font-main text-[20px]">
              With CrazyPrints, you can choose from a wide variety of genres and
              themes, so you'll never run out of new and exciting stories to
              create.
            </p>
          </div>
          <div class="flex flex-col items-start mb-[40px] w-[425px] py-[44px] px-[32px] gap-[16px] rounded-[30px] divide-[#7AB59F] border-[3px]">
            <h2 class="font-main text-[32px]">Convenience: </h2>
            <p class="font-main text-[20px]">
              Creating your own personalized storybook with CrazyPrints is easy
              and convenient. You can create your book online and receive it at
              your doorstep.
            </p>
          </div>
          <div class="flex flex-col items-start mb-[40px] w-[425px] py-[44px] px-[32px] gap-[16px] rounded-[30px] divide-[#7AB59F] border-[3px]">
            <h2 class="font-main text-[32px]">Affordable: </h2>
            <p>
              We strive to make our service affordable for everyone, so you can
              create a personalized storybook without breaking the bank.
            </p>
          </div>
          <p class="font-main text-[20px] flex flex-col items-start mb-[40px] w-[425px] py-[44px] px-[32px] gap-[16px]">
            All these benefits make CrazyPrints the perfect choice for anyone
            looking to create a truly special and unique storybook that can be
            treasured for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}
