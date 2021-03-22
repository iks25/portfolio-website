import React from "react";
import { convertTextToLetters } from "./FancyLetter/FancyLetter";
import { useSpring, animated } from "react-spring";

const TextBox = () => {
  const props = useSpring({
    // marginLeft: "0",
    // from: { marginLeft: "-1000px" },
  });
  return (
    <div className="textBoxContainer">
      <animated.div style={props} className="textBox">
        {convertTextToLetters("Hello,")}
        <br />
        {convertTextToLetters("I am Igor.")}
        <br />
        {convertTextToLetters("Software")}
        <br />
        {convertTextToLetters("Developer")}
      </animated.div>
    </div>
  );
};

export default TextBox;
