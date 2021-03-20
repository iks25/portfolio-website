import React, { useState } from "react";
import "./navItem.css";
const NavItem = ({ text = "" }) => {
  const [isItemHovered, setIsItemHovered] = useState(false);
  return (
    <div
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
      <div>{text}</div>

      <div>
        <div
          className={
            isItemHovered ? "navTriangle navTriangleHover" : "navTriangle"
          }
        ></div>
      </div>
    </div>
  );
};

export default NavItem;
