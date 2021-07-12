import React, { useState } from "react";
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
  const [hover, setHover] = useState(false);
  return (
    <div
      className="projectLabel"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: "auto 170px",
      }}
    >
      <div className="projectName">{title}</div>
      <div className="projectLinks" style={{ opacity: 0.2 }}>
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
      </div>
      <div className="triangleCorner">
        <div className="cover">
          <div className="arrow-left"></div>
        </div>
      </div>
      <div className="cornerLanguage">{codeLanguage}</div>
    </div>
  );
};

export default ProjectLabel;
