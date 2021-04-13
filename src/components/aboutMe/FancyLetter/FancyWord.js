import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { useSpring, useTrail, animated } from "react-spring";
import "./fancyWord.css";

const FancyWord = ({ word }) => {
  const wordLetters = Array.from(word);

  const springTrail = useTrail(wordLetters.length, {
    from: { top: "-200px", x: 0 },
    to: { top: "0", x: 1 },
    config: {},
  });

  return (
    <div style={{ display: "block" }}>
      {springTrail.map((animation) => (
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100px",
          }}
        >
          <animated.div class="box" style={animation} />
        </div>
      ))}
    </div>
  );
};

export default FancyWord;
