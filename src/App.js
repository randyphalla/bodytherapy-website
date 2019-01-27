//@flow
import React, { Component } from 'react';

import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import FeatureItemComponent from './components/feature-item/feature-item.component';
import TechItemComponent from './components/tech-Item/tech-item.component';
import BannerComponent from './components/banner/banner.component';
import AboutMeComponent from './components/about-me/about-me.component';

import logo from './assets/images/bt_logotype.png';
import messageTherapist from './assets/images/message-therapist.png';
import reactLogo from './assets/images/react-logo.png';
import reduxLogo from './assets/images/redux-logo.png';
import firebaseLogo from './assets/images/firebase-logo.png';
import googlePlay from './assets/images/google-play-badge.png';
import appStore from './assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

import './App.css';

export type AppProps = {
};

export type AppState = {
  isMobileMenu: boolean
};

class App extends Component<AppProps, AppState> {
	constructor(props) {
		super(props);

    this.state = {
      isMobileMenu: false
    }

		this.features = [
			{
				img: messageTherapist,
				title: 'Search therapy centres',
				body:
					'Users are able to pick and search for their therapy treatment of choice. Get quick access information about your therapy type/treatment. Find therapies centres based on the choices you made, it will give you a list of clinics that will specialize that specific therapy in your area/location.',
				rightSide: true,
				altTag: 'Mock',
			},
			{
				img: messageTherapist,
				title: 'Message Therapist',
				body:
					'You and your clinic are able to send messages to each other to schedule appointments, problem and question on your iPhone/Android.',
				rightSide: false,
				altTag: 'Mock',
			},
			{
				img: messageTherapist,
				title: 'View pictures, videos, notes, and more.',
				body:
					'Users will have the opportunity to view pictures, video and discussions based on the therapy type choice. Users will be able to gain access and valuable information about based users picked. To get more information, go to the discussion page where users and therapist are able to read, view, edit, create, and comment on discussion.',
				rightSide: true,
				altTag: 'Mock',
			},
		];

		this.technologies = [
			{
				img: reactLogo,
				name: 'React Native',
				altTag: 'React Native',
			},
			{
				img: reduxLogo,
				name: 'Redux',
				altTag: 'Redux',
			},
			{
				img: firebaseLogo,
				name: 'Firebase',
				altTag: 'Firebase',
			},
		];
	}

  showMobileMenu = () => {
    this.setState({
      isMobileMenu: !this.state.isMobileMenu
    })
  }

  scrollToID = (id) => {
    const scrollEl = document.getElementById('' + id + '');
    scrollEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  }

	render() {

    const { isMobileMenu } = this.state;

		return (

			<div>

        <div className={"sideMenu" + (isMobileMenu ? ' is-active' : '' )}>
          <div className={"sideMenu-content" + (isMobileMenu ? ' is-active' : '')}>
            <div className="row m-l-r-0">
              <div className="col-8">
                <img className="logo" src={logo} alt="Logo" />
              </div>
              <div className="col-4 text-right">
                <button className="btn close-btn" onClick={this.showMobileMenu}>
                  <i className="far fa-times-circle fa-2x"></i>
                </button>
              </div>
            </div>
            <div className="row m-l-r-0">
              <div className="col-xs-12">
                <ul className="sideMenu-links">
                  <li className="sideMenu-link">
                    <a onClick={() => this.scrollToID('aboutScoll')}>About</a>
                  </li>
                  <li className="sideMenu-link">
                    <a onClick={() => this.scrollToID('featureScoll')}>Features</a>
                  </li>
                  <li className="sideMenu-link">
                    <a onClick={() => this.scrollToID('technologiesScoll')}>Technologies</a>
                  </li>
                  <li className="sideMenu-link">
                    <a onClick={() => this.scrollToID('creatorScoll')}>Creator</a>
                  </li>
                  <li className="sideMenu-link">
                    <a onClick={() => this.scrollToID('comingSoonScoll')}>Coming Soon</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

				<HeaderComponent showMobileMenu={this.showMobileMenu} />

				<main className="main-content">
					<h2 className="hidden">Main Content</h2>

					<BannerComponent />

					<section className="about-us" id="aboutScoll">
            <h3 className="hidden">About Us</h3>
						<div className="container">
							<div className="row about-us justify-content-md-center">
								<div className="col-12 col-md-10 col-lg-8">
									<h3 className="title">We are Body Therapy</h3>
									<p className="body-text">
										Body Therapy application is a therapy application. The objective is to help people who needs
										therapy, access Information about their therapy type, clinic, pictures, and videos. Communicate with
										their therapist or clinic from their phone. Help users to find therapy clinics based on their
										selections.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="features" id="featureScoll">
          <h3 className="hidden">Features Section</h3>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<h4 className="title">Features of Body Therapy</h4>
								</div>
							</div>
                {
                  this.features.map((item, i) => {
                    return <FeatureItemComponent key={i} title={item.title} body={item.body} image={item.img} rightSide={item.rightSide} />
                  })
                }
						</div>
					</section>

					<section className="technologies" id="technologiesScoll">
          <h3 className="hidden">Technologies Section</h3>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<h4 className="title">Technologies</h4>
								</div>
							</div>
              <div className="row">
                {
                  this.technologies.map((item, i) => {
                    return <TechItemComponent key={i} image={item.img}  altTag={item.altTag}  />
                  })
                }
              </div>
						</div>
					</section>

					<AboutMeComponent />

					<section className="available-on" id="comingSoonScoll">
          <h3 className="hidden">Available On Section</h3>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<h2 className="secondary-title">Coming Soon</h2>
									<ul className="available-on-links">
										<li>
											<a href="https://play.google.com/store?hl=en">
												<img src={googlePlay} alt="Google Play" />
											</a>
										</li>
										<li>
											<a href="https://www.apple.com/ca/ios/app-store/">
												<img src={appStore} alt="Apple Store" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>

				</main>

				<FooterComponent />

			</div>
		);
	}
}

export default App;
