import React, { Component } from 'react';
import './banner.component.css';
import bannerImage from '../../assets/images/hero-image.png';

class BannerComponent extends Component {
  render() {
    return (
        <section className="hero-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 hero-banner-text">
              <h2>We help people that need <span className="bold-text">therapy</span>.</h2>
            </div>
            <div className="col-12 col-md-6">
              <img src={bannerImage} alt="Hero" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerComponent;
