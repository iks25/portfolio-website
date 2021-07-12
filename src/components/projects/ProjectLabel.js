import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import { Link } from "react-router-dom";
import "./projectLabel.css";
import inregularVerbIMG from "./img/inregularverbs.png";

const ProjectLabel = ({
  title,
  sourceCodeLink,
  projectLink,
  picture,
  codeLanguage,
}) => {
  const [isHover, setIsHover] = useState(false);
  const { hoverScale } = useSpring({
    hoverScale: isHover ? 1.1 : 1,
  });

  const linksStyleAnimation = useSpring({
    opacity: isHover ? 1 : 0,
  });

  const titileStyleAnimation = useSpring({
    opacity: isHover ? 1 : 0.7,
    height: isHover ? "60px" : "30px",
    color: isHover ? "rgba(255, 255, 255, 0.8);" : "black",
    fontSize: isHover ? "40px" : "20px",
  });

  return (
    <animated.div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className="projectLabel"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: "auto 170px",
        transform: hoverScale.interpolate(
          (hoverScale) => `scale(${hoverScale})`
        ),
      }}
    >
      <animated.div style={titileStyleAnimation} className="projectName">
        {title}
      </animated.div>
      <animated.div className="projectLinks" style={linksStyleAnimation}>
        <div>
          {projectLink && (
            <a
              rel="noopener noreferrer"
              href="http://url.com"
              target="_blank"
              className="projectLabelLink"
            >
              project
            </a>
          )}
        </div>
        <div>
          {sourceCodeLink && (
            <a
              rel="noopener noreferrer"
              href="http://url.com"
              target="_blank"
              className="projectLabelLink"
            >
              source code
            </a>
          )}
        </div>
      </animated.div>
      <div className="triangleCorner">
        <div className="cover">
          <div className="arrow-left"></div>
        </div>
      </div>
      <div className="cornerLanguage">{codeLanguage}</div>
    </animated.div>
  );
};

export default ProjectLabel;
