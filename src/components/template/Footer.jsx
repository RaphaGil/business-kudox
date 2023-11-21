import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faPinterest
  } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();

  return (
    <footer className='footer'>
     © {year} Kudox
  

<div className="social-container">
<a href="https://www.pinterest.co.uk/kudox/"
        className="pinterest social">
        <FontAwesomeIcon icon={faPinterest} size="1x" />
</a>
<a href="https://www.facebook.com/kudox.radiators/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
</a>
<a href="https://twitter.com/i/flow/login?redirect_after_login=%2FKudox" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
</a>
<a href="https://www.instagram.com/kudoxheating/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
</a>
</div>
</footer>
  );
};
export default Footer;