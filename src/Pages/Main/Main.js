import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import About from "../../Components/About/About";
import HowItsWorks from "../../Components/HowItsWorks/HowItsWorks";
import Question from "../../Components/Question/Question";
import ShowCase from "../../Components/Showcase/ShowCase";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Benefits from "../../Components/Benefits/Benefits";
import { setPage } from "../../store/helpers/helpersSlice";
import Parallax from "../../Components/Parallax/Parallax";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("main"));
  }, []);

  return (
    <div>
      <div class="h-[900px] max-[420px]:bg-mobileBg max-[420px]:h-[915.45px] relative bg-[#2D061B]">
        <Parallax />
      </div>
      <div class="bg-samurai flex justify-center flex-col pb-[80px] bg-cover  relative  overflow-hidden">
        <div class="w-[100%] h-[1px] border-[1px]  border-regular top-0 z-0 opacity-[0.4]" />
        <About />
      </div>
      <div class="bg-main-color">
        <div class="w-[43%] ml-[30%] h-[1px] border-[1px] origin-top-left rotate-[-45deg]  border-regular top-0 z-0 opacity-[0.4] invisible  max-[420px]:visible " />
        <div class="w-[100%] h-[0px] border-[1px]  border-regular top-0 z-0 opacity-[0.4]" />
        <Benefits />
      </div>
      <div class="bg-Frame6 flex  bg-cover xl:h-[1700px] ">
        <HowItsWorks />
      </div>
      <div class="bg-bg-main relative  overflow-hidden">
        <span class="absolute top-0 bg-regular w-[100%] h-[1px] opacity-[0.4]" />
        <div class="w-[582px] h-[582px] border-[1px]  border-regular rounded-full absolute top-[-8em] right-[-12em] z-0 opacity-[0.4]" />
        <div class="w-[582px] h-[582px] border-[1px]  border-regular rounded-full absolute bottom-[-8em] left-[-12em] z-0 opacity-[0.4]" />
        <Question />
        <span class="absolute bottom-0 bg-regular w-[100%] h-[1px] opacity-[0.4]" />
      </div>
      <div class="bg-testimonials bg-cover overflow-hidden pb-[234px] max-[420px]:pb-[266px] ">
        <ShowCase />
        <Testimonials />
      </div>
    </div>
  );
}
