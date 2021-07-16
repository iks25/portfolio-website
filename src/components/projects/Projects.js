import React from "react";
import ProjectLabel from "./ProjectLabel";
import "./project.css";
import inregularVerbIMG from "./img/inregularverbs.png";

const Projects = (props) => {
  return (
    <div>
      <div className="projects">
        <ProjectLabel
          title="inregular Verbs"
          codeLanguage="JS"
          sourceCodeLink="gsd"
          projectLink="fs"
          picture={inregularVerbIMG}
        />
      </div>
    </div>
  );
};

export default Projects;
