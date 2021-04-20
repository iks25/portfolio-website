import React from "react";
import { animated, config, useSpring } from "react-spring";
import ProgramingSkill from "./ProgramingSkill";

const SkillsTextBox = (props) => {
  const skillsBoxSize = 25;

  function CategorySpring(yMovment) {
    return useSpring({
      from: { transform: `translate3d(0,-${yMovment}px,0) scaleY(0)` },
      to: [
        {
          transform: `translate3d(0,-${yMovment}px,0) scaleY(1)`,
          config: config.wobbly,
        },
        { transform: `translate3d(0,0,0) scaleY(1)`, config: config.wobbly },
      ],

      delay: 1000,
    });
  }

  return (
    <div className="skillsTextBox">
      <animated.div style={CategorySpring(0)} className="category">
        front end
      </animated.div>
      <ProgramingSkill text="JavaScript (react)" nr={1} />
      <ProgramingSkill text="HTML" nr={2} />
      <ProgramingSkill text="CSS" nr={3} />
      <animated.div
        style={CategorySpring(skillsBoxSize * 3)}
        className="category"
      >
        back end
      </animated.div>
      <ProgramingSkill text="c# (asp.net core)" nr={4} />
      <ProgramingSkill text="Sql" nr={5} />
      <ProgramingSkill text="mongoDB" nr={6} />

      <animated.div
        style={CategorySpring(skillsBoxSize * 6)}
        className="category"
      >
        Mobile App
      </animated.div>
      <ProgramingSkill text="Java (Android Studio, Libgdx)" nr={7} />
    </div>
  );
};

export default SkillsTextBox;
