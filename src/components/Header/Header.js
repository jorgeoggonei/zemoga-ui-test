import React, { Component } from 'react';

import { homePath, pastTrialsPath, howItWorksPath, loginPath } from '../../constants';

import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__box">
          <div className="header__left">
            <p><a href={homePath}>Rule of thumb.</a></p>
          </div>
          <div className="header__right">
            <nav className="header__nav">
              <ul>
                <li><a href={pastTrialsPath}>Past Trials</a></li>
                <li><a href={howItWorksPath}>Hot It Works</a></li>
                <li><a href={loginPath}>Login</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
};

export default Header;