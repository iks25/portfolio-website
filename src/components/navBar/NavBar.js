import React from "react";
import NavItem from "./NavItem";
import "./navBar.css";

const NavBar = ({ lang }) => {
  return (
    <div className="navBarContainer">
      <NavItem text={lang === "eng" ? "about" : "o mnie"} />
      <NavItem text={lang === "eng" ? "skills" : "umiejętności"} />
      <NavItem text={lang === "eng" ? "projects" : "projekty"} />
      <NavItem text={lang === "eng" ? "contact" : "kontakt"} />
    </div>
  );
};

export default NavBar;
