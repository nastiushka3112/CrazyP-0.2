import React from "react";
import Header from "../../Components/Header/Header";
import HeaderRescription from "../../Components/Header/HeaderRescription";
import About from "../../Components/About/About";
import HowItsWorks from "../../Components/HowItsWorks/HowItsWorks";
import Question from "../../Components/Question/Question";
import ShowCase from "../../Components/Showcase/ShowCase";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import BurgerModal from "../../Components/Modal/BurgerModal";
import Benefits from "../../Components/Benefits/Benefits";

export default function Main() {
  const burger = useSelector((state) => state.helpers.burger);

  return (
    <div>
      <div class="bg-headImage bg-co bg-cover bg-center">
        <Header />
        {burger && <BurgerModal />}
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
      <div class="bg-testimonials bg-cover overflow-hidden">
        <ShowCase />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
