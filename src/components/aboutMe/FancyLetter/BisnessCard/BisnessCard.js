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

import React from "react";

const BisnessCard = (props) => {
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const githubIcon = <FontAwesomeIcon icon={["fab", "github"]} />;
  const linkedinIcon = <FontAwesomeIcon icon={["fab", "linkedin"]} />;

  return (
    <div>
      <div>kolo</div>
      <div>Igor Kozerski</div>
      <div>{phoneIcon}</div>
      <div>{mapIcon}</div>
      <div>{emailIcon}</div>
      <div>{githubIcon}</div>
      <div>{linkedinIcon}</div>
    </div>
  );
};

export default BisnessCard;
