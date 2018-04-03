import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-12">
            <ul>
              <li>About</li>
              <li>Feature</li>
              <li>Technologies</li>
              <li>Developer</li>
              <li></li>
            </ul>

            <ul>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>

            <ul>
              <li>&copy; 2018 Body Therapy </li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
