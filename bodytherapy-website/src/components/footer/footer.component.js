import React, { Component } from 'react';
import './footer.component.css';

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav-links">
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

              <ul className="social-links">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>

              <ul className="copyrights">
                <li>&copy; 2018 Body Therapy </li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
