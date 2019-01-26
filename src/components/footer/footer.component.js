import React, { Component } from 'react';
import './footer.component.css';

class FooterComponent extends Component {

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
			<footer className="footer">
      <h2 className="hidden">Footer</h2>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<ul className="nav-links">
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

							<ul className="social-links">
								<li>
									<a href="https://twitter.com/">Twitter</a>
								</li>
								<li>
									<a href="https://www.instagram.com/">Instagram</a>
								</li>
								<li>
									<a href="https://www.facebook.com/">Facebook</a>
								</li>
							</ul>

							<ul className="copyrights">
								<li>
                  <a href="/">&copy; 2019 Body Therapy</a>
                </li>
								<li>
                  <a href="/">Privacy Policy</a>
                </li>
								<li>
                  <a href="/">Terms of Service</a>
                </li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default FooterComponent;
