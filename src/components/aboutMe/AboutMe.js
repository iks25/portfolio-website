import React from "react";
import "./aboutMe.css";
import BisnessCard from "../BisnessCard/BisnessCard";
import FancyLetter, { convertTextToLetters } from "./FancyLetter/FancyLetter";
import TextBox from "./TextBox";
import FancyWord from "./FancyLetter/FancyWord";

const AboutMe = (props) => {
  let h1Text = "hello\nI am Igor,\nI am Software Developer";

  let line1 = "Hello,";

  return (
    <div className="aboutMePage" style={{ height: "800px" }}>
      <TextBox />

      <BisnessCard />
      <div>mycard</div>
    </div>
  );
};

export default AboutMe;
