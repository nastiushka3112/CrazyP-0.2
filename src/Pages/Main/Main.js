import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderRescription from "../../Components/Header/HeaderRescription";
import About from "../../Components/About/About";
import HowItsWorks from "../../Components/HowItsWorks/HowItsWorks";
import Question from "../../Components/Question/Question";
import ShowCase from "../../Components/Showcase/ShowCase";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Benefits from "../../Components/Benefits/Benefits";
import { setPage } from "../../store/helpers/helpersSlice";
import { Spring, animated } from "@react-spring/web";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("main"));
  }, []);

  return (
    <div>
      <div class="bg-headImage bg-co bg-cover bg-center h-[1101.45px] max-[420px]:bg-mobileBg max-[420px]:h-[915.45px]">
        <Spring
          delay={500}
          config={{ duration: 1000 }}
          from={{
            top: "33%",
            width: "100%",
            position: "absolute",
            zIndex: 2,
            opacity: 0,
          }}
          to={{
            top: "13%",
            width: "100%",
            position: "relative",
            zIndex: 2,
            opacity: 1,
          }}
        >
          {(style) => (
            <animated.div style={style}>
              <HeaderRescription />
            </animated.div>
          )}
        </Spring>
        {/* <HeaderRescription />  */}
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
      <div class="bg-Frame6 flex  bg-cover xl:h-[1700px]">
        <HowItsWorks />
      </div>
      <div class="bg-bg-main relative  overflow-hidden">
        <span class="absolute top-0 bg-regular w-[100%] h-[1px] opacity-[0.4]" />
        <div class="w-[582px] h-[582px] border-[1px]  border-regular rounded-full absolute top-[-8em] right-[-12em] z-0 opacity-[0.4]" />
        <div class="w-[582px] h-[582px] border-[1px]  border-regular rounded-full absolute bottom-[-8em] left-[-12em] z-0 opacity-[0.4]" />
        <Question />
        <span class="absolute bottom-0 bg-regular w-[100%] h-[1px] opacity-[0.4]" />
      </div>
      <div class="bg-testimonials bg-cover overflow-hidden pb-[234px]">
        <ShowCase />
        <Testimonials />
      </div>
    </div>
  );
}
