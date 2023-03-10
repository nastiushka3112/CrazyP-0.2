import React from "react";
import { useSelector } from "react-redux";
import NavMain from "./navBars/NavMain";
import NavCreate from "./navBars/NavCreate";
import { Spring, animated } from "@react-spring/web";

export default function Header() {
  const page = useSelector((state) => state.helpers.page);

  if (page === "main") {
    return (
      <Spring
        config={{ duration: 1000 }}
        delay={500}
        from={{ top: -100, position: "absolute", width: "100%", zIndex: 2 }}
        to={{ top: 0, position: "absolute", width: "100%", zIndex: 2 }}
      >
        {(style) => (
          <animated.div style={style}>
            <NavMain />
          </animated.div>
        )}
      </Spring>
    );
  }

  if (page === "create") {
    return <NavCreate />;
  }
}
