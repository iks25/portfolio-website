import React, { useRef, useState } from "react";
import "./fancyLetter.css";
import { useSpring, animated, interpolate, config } from "react-spring";
import { withRouter } from "react-router-dom";
import { version } from "react-dom";

const FancyLetter = ({ letter = "", addClass = "", delay = 0 }) => {
  const [isHover, setIsHover] = useState(false);

  const drawingAnimation = useSpring({
    from: { transform: "translateY(-600px) scale(1, 1)" },
    to: [
      {
        transform: "translateY(0) scale(0.9, 1.1)",
        config: { duration: 1000 },
      },
      {
        transform: "translateY(0) scale(1.2, 0.9)",
        config: { duration: 100 },
      },
      {
        transform: "translateY(-50px) scale(0.95, 1.05)",
        config: { duration: 500 },
      },
      {
        transform: "translateY(-50px) scale(1, 1)",
        config: { duration: 100 },
      },
      {
        transform: "translateY(0) scale(0.93, 1.03)",
        config: { duration: 500 },
      },
      {
        transform: "translateY(0) scale(1, 1)",
        config: { duration: 500 },
      },
    ],
    delay: delay,
  });

  const transformSpring = useSpring({
    from: { transform: "scale(1, 1)", color: "white" },
    to: [
      { transform: "scale(1.4, 0.8)", color: "rgb(255, 158, 158)" },
      { transform: "scale(0.9, 1.2)", color: "rgb(168, 158, 255)" },
      { transform: "scale(1, 1)", color: "white" },
    ],
    config: { velocity: 40, friction: 10, mass: 1, tension: 300 },
  });

  const styleEfect = () => {
    if (isHover) return transformSpring;
  };

  return (
    <animated.div
      className={"letter "}
      onMouseOver={() => {
        setIsHover(true);
      }}
      // style={styleEfect()}
      style={drawingAnimation}
      onMouseLeave={() => {
        setTimeout(() => {
          if (isHover) {
            setIsHover(false);
          }
        }, 2000);
      }}
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
