import React, { Component } from 'react';
import logo from '../../assets/images/bt_logotype.png';
import './header.component.css';

class HeaderComponent extends Component {

  scrollToID = (id) => {
    const scrollEl = document.getElementById('' + id + '');
    scrollEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  }

	render() {
		return (
			<header className="header">
      <h2 className="hidden">Header</h2>
				<div className="container mobile-view">
					<div className="row">
						<div className="col-3 menu">
              <button className="btn btn-link">
                <i className="fas fa-bars fa-2x" />
              </button>
						</div>
						<div className="col-6 logo d-flex align-items-center justify-content-center">
							<img src={logo} alt="Logo" />
						</div>
						<div className="col-3 email">
              <button className="btn btn-link">
                <i className="far fa-envelope fa-2x" />
              </button>
						</div>
					</div>
				</div>

				<div className="container desktop-view">
          <div className="row">
            <div className="col-12 col-md-3 logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-12 col-md-9 nav-links">
              <ul>
                <li>
                  <a onClick={() => this.scrollToID('aboutScoll')}>About</a>
                </li>
                <li>
                  <a onClick={() => this.scrollToID('featureScoll')}>Features</a>
                </li>
                <li>
                 <a onClick={() => this.scrollToID('technologiesScoll')}>Technologies</a>
                </li>
                <li>
                  <a onClick={() => this.scrollToID('creatorScoll')}>Creator</a>
                </li>
                <li>
                  <a onClick={() => this.scrollToID('comingSoonScoll')}>Coming Soon</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
			</header>
		);
	}
}

export default HeaderComponent;
