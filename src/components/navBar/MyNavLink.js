import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navLink.css";
const MyNavLink = ({ text = "", to }) => {
  const [isItemHovered, setIsItemHovered] = useState(false);
  return (
    <Link
      to={to}
      className={isItemHovered ? "navItem navItemHover" : "navItem"}
      onMouseOver={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
    >
      <div
        className={
          isItemHovered
            ? "navTriangleTop navTriangleTopHover"
            : "navTriangleTop"
        }
      ></div>
      <div
        className={
          isItemHovered ? "navItemText navItemTextHover" : "navItemText"
        }
      >
        {text}
      </div>

      <div>
        <div
          className={
            isItemHovered ? "navTriangle navTriangleHover" : "navTriangle"
          }
        ></div>
      </div>
    </Link>
  );
};

export default MyNavLink;
