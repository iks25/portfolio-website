import React from "react";
import "./projectLabel.css";
const ProjectLabel = (props) => {
  return (
    <div className="projectLabel">
      <div className="projectName">project name</div>
      <div className="projectLinks">
        <div>
          <div className="projectLabelLink">project</div>
        </div>
        <div>
          <div className="projectLabelLink">source code</div>
        </div>
      </div>
      <div className="triangleCorner">
        <div className="cover">
          <div className="arrow-left"></div>
        </div>
      </div>
      <div className="cornerLanguage">js</div>
    </div>
  );
};

export default ProjectLabel;
