import React, { useRef, useState } from "react";
import "./fancyLetter.css";
import { useSpring, animated, interpolate, config } from "react-spring";
import { withRouter } from "react-router-dom";
import { version } from "react-dom";
import * as easings from "d3-ease";

const FancyLetter = ({ letter = "", addClass = "", delay = 0 }) => {
  const [isEntered, setisEntered] = useState(true);
  const [isHover, setIsHover] = useState(false);
  let refresznumber = 0;

  const drawingAnimation = useSpring({
    from: { transform: "translateY(-600px) scale(1, 1)", color: "white" },
    to: [
      {
        transform: "translateY(0) scale(0.9, 1.1)",

        config: {
          duration: 1000,
          easing: easings.easeCubicIn,
        },
      },
      {
        transform: "translateY(0) transform: scale(1.4, 0.8)",
        color: "rgb(255, 158, 158)",
        config: { duration: 50 },
      },
      {
        transform: "translateY(0) transform: scale(0.95, 1.05)",
        color: "rgb(168, 158, 255)",
        config: { duration: 50 },
      },
      {
        transform: "translateY(-50px) scale(0.95, 1.05)",
        config: { duration: 400, easings: easings.easeCubicOut },
        color: "white",
      },
      {
        transform: "translateY(-50px) scale(1, 1)",
        config: { duration: 20 },
      },
      {
        transform: "translateY(0) scale(0.93, 1.03)",
        config: { duration: 500, easings: easings.easeCubicIn },
      },
      {
        transform: "translateY(0) scale(1, 1)",
        config: { duration: 300 },
      },
    ],
    delay: delay,
    onRest: () => {
      setisEntered(false);
      console.log("end");
    },
  });

  const transformSpring = useSpring({
    from: { transform: "scale(1, 1)", color: "white" },
    to: isHover
      ? [
          { transform: "scale(1.4, 0.8)", color: "rgb(255, 158, 158)" },
          { transform: "scale(0.9, 1.2)", color: "rgb(168, 158, 255)" },
          { transform: "scale(1, 1)", color: "white" },
        ]
      : { transform: "scale(1, 1)", color: "white" },
    config: { velocity: 40, friction: 10, mass: 1, tension: 300 },
    onRest: () => {
      if (isHover) setIsHover(false);
    },
  });

  const styleEfect = () => {
    if (isEntered) {
      console.log("-->");
      return drawingAnimation;
    }
    return transformSpring;

    // if (isHover) return transformSpring;
  };

  return (
    <animated.div
      className={"letter "}
      onMouseOver={() => {
        setIsHover(true);
      }}
      style={styleEfect()}
    >
      {letter == " " ? <span> &nbsp; </span> : letter}
    </animated.div>
  );
};

export default FancyLetter;

export function convertTextToLetters(text, deley = 0, addClass = "") {
  let arrayText = Array.from(text);

  return arrayText.map((letter, index) => (
    <FancyLetter
      letter={letter}
      key={index}
      addClass={addClass}
      delay={index * 200 + deley}
    />
  ));
}
