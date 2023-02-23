import React from "react";
import Card from "./Card";

const data = [
  {
    name: "Choose a theme and genre",
    text: `First, you'll select a theme and genre for your book. We
	offer a wide variety of options, from adventure and
	fantasy to science fiction and romance, so you can create
	a story that's tailored to your interests and preferences.`,
  },
  {
    name: "Fill out a questionnaire",
    text: `   Next, you'll fill out a questionnaire that will help our
	AI algorithms understand your interests and preferences.
	This will include questions about your favorite
	characters, settings, and story elements.`,
  },
  {
    name: "Review and approve a digital proof",
    text: `    Our team of developers and illustrators will use the
	information you provided to generate a unique story and
	illustrations for your book. You will be able to review
	and approve a digital proof of your book before it's
	printed, and make any changes you'd like.`,
  },
  {
    name: "Receive your book",
    text: `Once you have approved the digital proof, we will print
	your book and ship it to you. It usually takes about 2-4
	weeks for your book to be printed and delivered to you.`,
  },
  {
    name: "Enjoy your personalized storybook",
    text: `   Your personalized storybook is now ready to be enjoyed!
	The high-quality printing ensures that your book is a
	beautiful and durable keepsake that will last for years to
	come.`,
  },
];

export default function HowItsWorks() {
  return (
    <div class="flex flex-col justify-center items-center mt-[200px] mb-[233px] relative">
      <div class="flex flex-col justify-start items-center  bg-[#F9E2BB] pt-[34px] md:pl-[129px] max-w-[1020px] h-[1260px]">
        <div class="flex flex-col justify-start items-start">
          <h2 class="text-[#433E3E] text-[64px] font-about float-right">
            How it works?
          </h2>
          <p class="font-main text-[24px] text-[#433E3E] max-w-[731px]">
            At CrazyPrints, creating your own personalized storybook is easy and
            fun. Here's how it works:
          </p>
          <img
            src={require("../Theme/Img/5021.png")}
            alt="HowItWorks"
            class="max-w-[400px] sm:max-w-[600px] max-h-[840] mt-[72px]"
          />
        </div>
      </div>
      <div class="xl:absolute xl:top-[20%] 2xl:left-[55em] 2xl:top-[20%] xl:left-[49em] relative">
        {data.map((el) => (
          <Card name={el.name} text={el.text} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
