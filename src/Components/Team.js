import React from "react";
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Baris, Ilayda, Onurcan, Bilgehan } from '../Assets'
import "../CSS/Team.css";

function Team() {
  return (
    <div className="team" id="team">
      <h2>Our Coordinators</h2>
      <div className="coordinators">
        <div className="coordinator">
          <img src={Baris} />
          <p>Lorem Ipsum</p>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="coordinator">
          <img src={Ilayda} />
          <p>Lorem Ipsum</p>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="coordinator">
          <img src={Onurcan} />
          <p>Lorem Ipsum</p>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="coordinator">
          <img src={Bilgehan} />
          <p>Lorem Ipsum</p>
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    </div>
  );
}

export default Team;
