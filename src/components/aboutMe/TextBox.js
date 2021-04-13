import React from "react";
import { convertTextToLetters } from "./FancyLetter/FancyLetter";
import { useSpring, animated, config } from "react-spring";

const TextBox = () => {
  return (
    <div className="textBoxContainer">
      <animated.div className="textBox">
        {convertTextToLetters("Hello,", 3000)}
        <br />
        {convertTextToLetters("I am Igor.", 2000)}
        <br />
        {convertTextToLetters("Software", 1000)}
        <br />
        {convertTextToLetters("Developer")}
      </animated.div>
    </div>
  );
};

export default TextBox;
