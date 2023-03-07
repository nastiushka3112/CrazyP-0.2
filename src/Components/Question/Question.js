import React from "react";
import Window from "./Window";

const textData = [
  {
    name: "How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "  How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
];

export default function Question() {
  return (
    <div class="pt-[145px] pb-[178px] flex flex-col justify-center items-center">
      <div>
        <h2 class="text-regular text-[48px] font-mainText max-[420px]:px-[5%]">
          Frequently asked questions
        </h2>
      </div>
      <div class="flex flex-wrap justify-center z-10">
        <div class="flex flex-col">
          {textData
            .map((el) => (
              <Window name={el.name} text={el.text} key={Math.random()} />
            ))
            .slice(0, textData.length / 2)}
        </div>
        <div>
          <div class="flex flex-col">
            {textData
              .map((el) => (
                <Window name={el.name} text={el.text} key={Math.random()} />
              ))
              .slice(textData.length / 2)}
          </div>
        </div>
      </div>
    </div>
  );
}
