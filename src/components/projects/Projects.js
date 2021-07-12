import React from "react";
import ProjectLabel from "./ProjectLabel";
import "./project.css";
import inregularVerbIMG from "./img/inregularverbs.png";

const Projects = (props) => {
  return (
    <div>
      Projects
      <br />
      test ds
      <div></div>
      <div>
        <ProjectLabel
          title="World Detective"
          codeLanguage="java"
          sourceCodeLink="gsd"
          projectLink="fs"
          picture={inregularVerbIMG}
        />
      </div>
      <div>fsdfsdfdsfds</div>
    </div>
  );
};

export default Projects;
