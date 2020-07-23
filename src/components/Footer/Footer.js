import React, { Component } from 'react';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__links">
          <ul>
          <li><a href="/">Terms and Conditions</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer__nets">
          <p>
            Follow us
          </p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </footer>
    )
  }
};

export default Footer;