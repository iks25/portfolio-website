import React from "react";
import MyNavLink from "./MyNavLink";

import "./navBar.css";

const NavBar = ({ lang }) => {
  return (
    <div className="navBarContainer">
      <MyNavLink to="/about-me" text={lang === "eng" ? "about" : "o mnie"} />
      <MyNavLink
        to="/projects"
        text={lang === "eng" ? "projects" : "projekty"}
      />
      <MyNavLink
        to="/skills"
        text={lang === "eng" ? "skills" : "umiejętności"}
      />
      <MyNavLink to="/contact" text={lang === "eng" ? "contact" : "kontakt"} />
    </div>
  );
};

export default NavBar;
