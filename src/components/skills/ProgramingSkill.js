import React from "react";
import { useSpring, animated } from "react-spring";

const ProgramingSkill = ({ text = "", nr = 0 }) => {
  const styleAnim = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 2000 + 250 * nr,
  });
  return (
    <animated.div className="skill" style={styleAnim}>
      <div>
        <li>{text}</li>
      </div>
      <div></div>
    </animated.div>
  );
};

export default ProgramingSkill;
