import React from "react";
import { convertTextToLetters } from "./FancyLetter/FancyLetter";
import { useSpring, animated, config } from "react-spring";

const TextBox = () => {
  const props = useSpring({
    to: [
      { marginTop: 0, marginLeft: 0 },
      {
        transform: "scale(1)",
        config: { mass: 6, tension: 200 },
      },
    ],
    from: { marginTop: -2500, marginLeft: 500, transform: "scale(0.3)" },
    config: config.gentle,
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
