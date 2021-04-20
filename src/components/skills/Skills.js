import React from "react";
import { useSpring, animated, config } from "react-spring";

import "./skills.css";
import SkillsTextBox from "./SkillsTextBox";

const Skills = (props) => {
  const skillsInfoStyleAnim = useSpring({
    from: { transform: "scale(0.3)" },
    to: { transform: "scale(1)" },
    config: config.stiff,
  });
  return (
    <div className="skills">
      <SkillsTextBox />
      <div>
        <animated.div className="skillsInfo" style={skillsInfoStyleAnim}>
          Currently I feel most confident in front-end development, but I am
          keen to learn and I can start back-end development or mobile app
          development after refresh.
        </animated.div>
      </div>
    </div>
  );
};

export default Skills;
