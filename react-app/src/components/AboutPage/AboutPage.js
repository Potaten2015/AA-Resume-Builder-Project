import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <NavLink to="/">Back to Home</NavLink>
      <div id="contributors">
        <div>
          <h1>Taten Knight</h1>
          <a href="https://www.linkedin.com/in/taten-knight/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Potaten2015">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div>
          <h1>Matthew Hasan</h1>
          <a href="https://github.com/MattMav21">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div>
          <h1>Johnny Tran</h1>
          <a href="https://www.linkedin.com/in/johnny-tran-8760601bb/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/TranJohnny">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div>
          <h1>William Vincent</h1>
          <a href="https://github.com/WJVincent">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.linkedin.com/in/william-vincent-5658851ba/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div id="site-description"></div>
    </div>
  );
};

export default AboutPage;
