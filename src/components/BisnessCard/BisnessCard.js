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

import React from "react";
import { Link } from "react-router-dom";

const BisnessCard = (props) => {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const githubIcon = <FontAwesomeIcon icon={["fab", "github"]} />;
  const linkedinIcon = <FontAwesomeIcon icon={["fab", "linkedin"]} />;

  return (
    <div className="bisnessCardContainer">
      <div className="bisnessCardBorder">
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
      </div>
    </div>
  );
};

export default BisnessCard;
