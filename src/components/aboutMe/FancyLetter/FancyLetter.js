import React, { useState } from "react";
import "./fancyLetter.css";

const FancyLetter = ({ letter = "", addClass = "" }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <span
      className={"letter " + addClass + (isHover ? " letterHover" : "")}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {letter}
    </span>
  );
};

export default FancyLetter;

export function convertTextToLetters(text, addClass = "") {
  let arrayText = Array.from(text);

  return arrayText.map((letter, index) => (
    <FancyLetter letter={letter} key={index} addClass={addClass} />
  ));
}
