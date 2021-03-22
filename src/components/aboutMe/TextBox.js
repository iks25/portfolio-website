import React from "react";
import { convertTextToLetters } from "./FancyLetter/FancyLetter";
import { useSpring, animated } from "react-spring";

const TextBox = () => {
  const props = useSpring({
    to: [{ marginTop: 0, marginLeft: 0 }, { transform: "scale(1)" }],

    from: { marginTop: 3000, marginLeft: 3000, transform: "scale(0.3)" },

    config: { mass: 2, tension: 200, friction: 30 },
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
