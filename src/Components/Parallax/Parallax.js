import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Spring, animated } from "@react-spring/web";
import HeaderRescription from "../Header/HeaderRescription";

export default function ParallaxSection() {
  return (
    <div>
      <div
        class="max-[420px]:invisible  visible"
        style={{
          width: "100%",
          height: "100%",
          background: "#253237",
          overflowX: "hidden",
        }}
      >
        <Parallax
          pages={1.1}
          style={{
            top: "-10",
            left: "0",
            height: "900px",
          }}
        >
          <ParallaxLayer offset={0} speed={0.75}>
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
                  <div class="w-[100%] relative">
                    <img
                      src={require("../Theme/Img/Parallax/bg1.png")}
                      alt="trees1"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        height: "900px",
                      }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.75}>
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
                  <div class="w-[100%] relative">
                    <img
                      src={require("../Theme/Img/Parallax/bg.png")}
                      alt="samurai"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        height: "900px",
                      }}
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
                  <div class="w-[100%] relative">
                    <img
                      src={require("../Theme/Img/Parallax/trees1.png")}
                      alt="trees1"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        top: "-111px",
                        height: "1011px",
                      }}
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
                  <div class="w-[100%] relative">
                    <img
                      src={require("../Theme/Img/Parallax/trees.png")}
                      alt="trees1"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        height: "900px",
                      }}
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
                  <div class="w-[100%] relative">
                    <img
                      src={require("../Theme/Img/Parallax/samurai.png")}
                      alt="samurai"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        height: "900px",
                      }}
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
                  <div class="w-[100%] relative">
                    <img
                      src={require("../Theme/Img/Parallax/samurai1.png")}
                      alt="trees1"
                      style={{
                        width: "100%",
                        backgroundSize: "cover",
                        position: "absolute",
                        height: "900px",
                      }}
                    />
                  </div>
                </animated.div>
              )}
            </Spring>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.9}>
            <Spring
              delay={2000}
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
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <div class="bg-[#2D061B] h-[900px]"></div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <div class="bg-headImage bg-co bg-cover bg-center h-[1101.45px] max-[420px]:bg-mobileBg max-[420px]:h-[915.45px] max-[420px]:visible invisible">
        <Spring
          delay={2000}
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
      </div>
    </div>
  );
}
