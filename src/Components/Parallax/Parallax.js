import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Spring, animated } from "@react-spring/web";
import Samurai from "../Theme/Parallax/samurai";
import Trees from "../Theme/Parallax/trees";
import Bg from "../Theme/Parallax/bg";
import Bg2 from "../Theme/Parallax/bg2";
import NavCreate from "../Header/navBars/NavMain";
import Samurai2 from "../Theme/Parallax/samurai2";
import Trees2 from "../Theme/Parallax/trees2";
import HeaderRescription from "../Header/HeaderRescription";

export default function ParallaxSection() {
  return (
    <div class="h-[1100px] relative">
      <Spring
        config={{ duration: 1000 }}
        delay={500}
        from={{ top: -100, position: "absolute", width: "100%", zIndex: 2 }}
        to={{ top: 0, position: "absolute", width: "100%", zIndex: 2 }}
      >
        {(style) => (
          <animated.div style={style}>
            <NavCreate />
          </animated.div>
        )}
      </Spring>
      <Parallax
        pages={2}
        style={{
          top: "0",
          left: "0",
          height: "1100px",
        }}
      >
        {/* <ParallaxLayer offset={0} speed={0.75} factor={3}>
          <Bg />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25} factor={3}>
          <Trees />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} factor={3}>
          <Samurai />
        </ParallaxLayer> */}
        <ParallaxLayer sticky={{ start: 0, end: 1 }}>
          <Spring
            delay={500}
            config={{ duration: 1000 }}
            from={{
              top: 300,
              position: "absolute",
              width: "100%",
              zIndex: 2,
              opacity: 0,
            }}
            to={{
              top: 100,
              position: "absolute",
              width: "100%",
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
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75} factor={1.5}>
          <div class="bg-bgParallax flex justify-center pb-[80px] bg-cover h-[1000px] w-[100%]  absolute   overflow-hidden" />
          {/* <Bg2 /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25} factor={2}>
          <div class="bg-treesParallax flex justify-center pb-[80px] bg-cover h-[1000px] w-[100%]  absolute   overflow-hidden" />
          {/* <Trees2 /> */}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <div class="bg-samuraiParallax flex justify-center pb-[80px] bg-cover h-[1000px] w-[100%]  absolute   overflow-hidden" />
          {/* <Samurai2 /> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
