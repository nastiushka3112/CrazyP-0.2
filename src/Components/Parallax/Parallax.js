import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Samurai from "../Theme/Parallax/samurai";
import Trees from "../Theme/Parallax/trees";
import Bg from "../Theme/Parallax/bg";
import Bg2 from "../Theme/Parallax/bg2";
import NavCreate from "../Header/navBars/NavCreate";
import Samurai2 from "../Theme/Parallax/samurai2";
import Trees2 from "../Theme/Parallax/trees2";

export default function ParallaxSection() {
  return (
    <div class="h-[1100px]">
      <NavCreate />
      <Parallax
        pages={2}
        style={{
          top: "0",
          left: "0",
          height: "1100px",
        }}
      >
        <ParallaxLayer offset={0} speed={0.75} factor={3}>
          <Bg />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25} factor={3}>
          <Trees />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} factor={3}>
          <Samurai />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.75} factor={1.5}>
          <Bg2 />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25} factor={1.5}>
          <Trees2 />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} factor={1.5}>
          <Samurai2 />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
