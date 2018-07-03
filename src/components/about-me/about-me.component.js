import React, { Component } from 'react';
import './about-me.component.css';

class AboutMeComponent extends Component {
  render() {
    return (
        <section className="about-me">

            <div className="container">

            <div className="row">
                <div className="col-12">
                <h2 className="title">Creator of Body Therapy</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                <img src="" alt="Profile Image" />
                </div>

                <div className="col-12 col-md-8">
                <h2 className="title title-left">Randy Phalla</h2>
                <h3 className="secondary-title">Front End Developer / Graphic Designer</h3>
                <p className="body-text">Hello There. I’m Randy Phalla and the creator of Body Therapy. I’m a Graphic Designer & Front-End Developer. I was born and raised in London, Ontario. I graduated from the Fanshawe Graphic Design Program in 2014. I’m currently in the Interactive Media Specialist Program at Fanshawe College in Downtown Area. Where I learn new technologies and further develop my web development skills to become a web developer & designer. I enjoy working out at the gym, watching movies, tv shows, playing computer games, learn about new technologies, graphic design trends and staying up to date.</p>
                <button className="resume-btn">Resume</button>
                </div>
            </div>

            </div>

        </section>
    );
  }
}

export default AboutMeComponent;
