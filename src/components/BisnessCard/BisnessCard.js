import {
  faEnvelope,
  faMapMarked,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMapPin,
  faMapSigns,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import myPicture from "./jasquere.png";
import "./bisnessCard.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring, useTransition } from "react-spring";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const BisnessCard = (props) => {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const githubIcon = <FontAwesomeIcon icon={["fab", "github"]} />;
  const linkedinIcon = <FontAwesomeIcon icon={["fab", "linkedin"]} />;

  const [loadinNumber, setLoadinNumber] = useState(0);

  const enterSpringStyle = useSpring({
    from: { transform: "scale(1.6) translate(400px, -400px) rotate(20deg)" },
    to: [
      { transform: "scale(0.9) translate(0, 0) rotate(20deg)" },
      { transform: "scale(0.9) translate(0, 0) rotate(0)" },
    ],
    delay: 7000,
  });

  const getSpringStyle = () => {
    if (loadinNumber == 0) return enterSpringStyle;
  };

  return (
    <div className="bisnessCardContainer">
      <animated.div className="bisnessCardBorder" style={getSpringStyle()}>
        <div className="bisnessCard">
          <img src={myPicture} className="myPicture" alt="profilImage" />
          <div className="nameDiv">Igor Kozerski</div>
          <div className="moreInf">
            <div>{mapIcon} (S70 1BA) Barnsley</div>
            <div>{phoneIcon} +44 7871 245752</div>
            <div>{emailIcon} ikspun@gmail.com</div>
            <div>
              {githubIcon}
              <span> </span>
              <a href="https://github.com/iks25" target="blank">
                github.com/iks25
              </a>
            </div>
            <div>
              {linkedinIcon} <span> </span>
              <a
                href="https://www.linkedin.com/in/igor-kozerski-9858001b8/"
                target="blank"
              >
                linkedin.com
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default BisnessCard;
