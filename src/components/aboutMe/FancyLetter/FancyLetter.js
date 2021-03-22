import React, { useRef, useState } from "react";
import "./fancyLetter.css";
import { useSpring, animated, interpolate, config } from "react-spring";
import { withRouter } from "react-router-dom";
import { version } from "react-dom";

const FancyLetter = ({ letter = "", addClass = "" }) => {
  const [isHover, setIsHover] = useState(false);

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
      style={styleEfect()}
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

export function convertTextToLetters(text, addClass = "") {
  let arrayText = Array.from(text);

  return arrayText.map((letter, index) => (
    <FancyLetter letter={letter} key={index} addClass={addClass} />
  ));
}
