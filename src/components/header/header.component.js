import React, { Component } from 'react';
import logo from '../../assets/images/bt_logotype.png';
import './header.component.css';

class HeaderComponent extends Component {
  render() {
    return (
      <header className="header">

        <div className="container mobile-view">
          <div className="row">
            <div className="col-3 menu">
              <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className="col-6 logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-3 email">
              <i className="far fa-envelope fa-2x"></i>
            </div>
          </div>
        </div>

        {/* <div className="container desktop-view">
          <div className="row">
            <div className="col-12 col-md-4 logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-12 col-md-8 nav-links">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                 <a href="#">Technologies</a>
                </li>
                <li>
                  <a href="#">Creator</a>
                </li>
                <li>
                  <a href="#">Coming Soon</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

      </header>
    );
  }
}

export default HeaderComponent;
