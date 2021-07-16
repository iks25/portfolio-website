import React from "react";
import "./contact.css";
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
const Contact = (props) => {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  const linkedinIcon = <FontAwesomeIcon icon={["fab", "linkedin"]} />;
  const facebookIcon = <FontAwesomeIcon icon={["fab", "facebook-square"]} />;

  return (
    <div className="contact">
      <div className="contactBox">
        <div>
          <a href="tel:+44-7871-245752">{phoneIcon} +44 7871 245752</a>
        </div>
        <div>{emailIcon} ikspun@gmail.com</div>
        <div>
          <a
            href="https://www.linkedin.com/in/igor-kozerski-9858001b8/"
            target="blank"
          >
            {linkedinIcon} <span>linkedin.com</span>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/igor.kozerski" target="_blank">
            {facebookIcon} <span>facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
