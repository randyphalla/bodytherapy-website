import React, { Component } from 'react';
import meImage from '../../assets/images/Self-Portrait.png';
import './about-me.component.css';
import RandyPhallaResumePDF from '../../assets/files/randy-phalla-resume.pdf';

class AboutMeComponent extends Component {
	render() {
		return (
			<section className="about-me"  id="creatorScoll">
      <h3 className="hidden">About Me</h3>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h4 className="title">Creator of Body Therapy</h4>
						</div>
					</div>
					<div className="row about-me-cont">
						<div className="col-12 col-md-4">
							<img src={meImage} alt="Profile" />
						</div>
						<div className="col-12 col-md-8">
							<h4 className="title title-left">Randy Phalla</h4>
							<h5 className="secondary-title">Front End Developer / Graphic Designer</h5>
							<p className="body-text">
								Hello There. I’m Randy Phalla and the creator of Body Therapy. I’m a Graphic Designer & Front-End
								Developer. I was born and raised in London, Ontario. I graduated from the Fanshawe Graphic Design
								Program in 2014. I’m currently in the Interactive Media Specialist Program at Fanshawe College in
								Downtown Area. Where I learn new technologies and further develop my web development skills to become a
								web developer & designer. I enjoy working out at the gym, watching movies, tv shows, playing computer
								games, learn about new technologies, graphic design trends and staying up to date.
							</p>
              <p className="mt-4">
                <a className="resume-btn" href={RandyPhallaResumePDF} download="Randy Phalla's Resume">
                  Resume
                </a>
              </p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default AboutMeComponent;
