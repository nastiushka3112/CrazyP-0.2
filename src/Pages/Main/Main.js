import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Header from "../../Components/Header/Header";
import HeaderRescription from "../../Components/Header/HeaderRescription";
import About from "../../Components/About/About";
import HowItsWorks from "../../Components/HowItsWorks/HowItsWorks";
import Question from "../../Components/Question/Question";
import ShowCase from "../../Components/Showcase/ShowCase";
import Testimonials from "../../Components/Testimonials/Testimonials";
// import BurgerModal from "../../Components/Modal/BurgerModal";
import Benefits from "../../Components/Benefits/Benefits";
import { setPage } from "../../store/helpers/helpersSlice";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Samurai from "../../Components/Theme/Parallax/samurai";
import Trees from "../../Components/Theme/Parallax/trees";
import Bg from "../../Components/Theme/Parallax/bg";

export default function Main() {
  // const burger = useSelector((state) => state.helpers.burger);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("main"));
  }, []);

  return (
    <div>
      <div class="bg-headImage bg-co bg-cover bg-center">
        {/* <Parallax
        pages={2}
        style={{
          top: "0",
          left: "0",
          height: "800.45px",
        }}
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <h1 class="text-[red]">TETETETETETETET</h1>
          <Bg />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <Trees />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
          <Samurai />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <Bg />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Trees />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.75}>
          <Samurai />
        </ParallaxLayer>
      </Parallax> */}
        <HeaderRescription />
      </div>
      <div class="bg-samurai flex justify-center flex-col pb-[80px] bg-cover  relative  overflow-hidden">
        <div class="w-[100%] h-[1px] border-[1px]  border-regular top-0 z-0 opacity-[0.4]" />
        <About />
      </div>
      <div class="bg-main-color">
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
