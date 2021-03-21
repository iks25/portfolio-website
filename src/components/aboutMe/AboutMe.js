import React from "react";
import "./aboutMe.css";
import FancyLetter, { convertTextToLetters } from "./FancyLetter/FancyLetter";

const AboutMe = (props) => {
  let h1Text = "hello\nI am Igor,\nI am Software Developer";

  let line1 = "Hello,";

  return (
    <div>
      <h1>
        {convertTextToLetters("Hello,")}
        <br />
        {convertTextToLetters("I am Igor.")}
        <br />
        {convertTextToLetters("Software")}
        <br />
        {convertTextToLetters("Developer")}
      </h1>
    </div>
  );
};

export default AboutMe;
