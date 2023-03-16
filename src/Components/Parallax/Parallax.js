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
import About from "../About/About";

export default function ParallaxSection() {
  return (
    <div>
      <div style={{ width: "100%", height: "100%", background: "#253237" }}>
        <Parallax
          pages={1.1}
          style={{
            top: "0",
            left: "0",
            height: "1101.45px",
          }}
        >
          <ParallaxLayer offset={0} speed={0.75}>
            <Spring
              delay={500}
              config={{ duration: 2100 }}
              from={{
                width: "100%",
                zIndex: 2,
                opacity: 0,
              }}
              to={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div class="w-[100%]">
                    <img
                      src={require("../Theme/Img/Parallax/bg1.png")}
                      alt="trees1"
                      style={{ width: "100%", backgroundSize: "cover" }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.75}>
            <Spring
              delay={500}
              config={{ duration: 2100 }}
              from={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
              }}
              to={{
                width: "100%",
                zIndex: 2,
                opacity: 0,
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div class="w-[100%]">
                    <img
                      src={require("../Theme/Img/Parallax/bg.png")}
                      alt="samurai"
                      style={{ width: "100%", backgroundSize: "cover" }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            {" "}
            <Spring
              delay={500}
              config={{ duration: 2500 }}
              from={{
                width: "100%",
                zIndex: 2,
                opacity: 0,
              }}
              to={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div class="w-[100%]">
                    <img
                      src={require("../Theme/Img/Parallax/trees1.png")}
                      alt="trees1"
                      style={{ width: "100%", backgroundSize: "cover" }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            {" "}
            <Spring
              delay={500}
              config={{ duration: 2500 }}
              from={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
              }}
              to={{
                width: "100%",
                zIndex: 2,
                opacity: 0,
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div class="w-[100%]">
                    <img
                      src={require("../Theme/Img/Parallax/trees.png")}
                      alt="trees1"
                      style={{ width: "100%", backgroundSize: "cover" }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <Spring
              delay={500}
              config={{ duration: 3000 }}
              from={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
              }}
              to={{
                width: "100%",
                zIndex: 2,
                opacity: 0,
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div class="w-[100%]">
                    <img
                      src={require("../Theme/Img/Parallax/samurai.png")}
                      alt="samurai"
                      style={{ width: "100%", backgroundSize: "cover" }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <Spring
              delay={500}
              config={{ duration: 3000 }}
              from={{
                width: "100%",
                zIndex: 2,
                opacity: 0,
              }}
              to={{
                width: "100%",
                zIndex: 2,
                opacity: 1,
              }}
            >
              {(style) => (
                <animated.div style={style}>
                  <div class="w-[100%]">
                    <img
                      src={require("../Theme/Img/Parallax/samurai1.png")}
                      alt="trees1"
                      style={{ width: "100%", backgroundSize: "cover" }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
