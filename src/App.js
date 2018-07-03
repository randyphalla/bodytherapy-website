import React, { Component } from 'react';

import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import FeatureItemComponent from './components/feature-item/feature-item.component';
import TechItemComponent from './components/tech-Item/tech-item.component';
import BannerComponent from './components/banner/banner.component';
import AboutMeComponent from './components/about-me/about-me.component';

import messageTherapist from './assets/images/message-therapist.png';
import reactLogo from './assets/images/react-logo.png';
import reduxLogo from './assets/images/redux-logo.png';
import firebaseLogo from './assets/images/firebase-logo.png';
import googlePlay from './assets/images/google-play-badge.png';
import appStore from './assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.features = [
          {
            img: messageTherapist,
            title: 'Search therapy centres',
            body: 'Users are able to pick and search for their therapy treatment of choice. Get quick access information about your therapy type/treatment. Find therapies centres based on the choices you made, it will give you a list of clinics that will specialize that specific therapy in your area/location.',
            rightSide: true,
            altTag: 'Mock'
          },
          {
            img: messageTherapist,
            title: 'Message Therapist',
            body: 'You and your clinic are able to send messages to each other to schedule appointments, problem and question on your iPhone/Android.',
            rightSide: false,
            altTag: 'Mock'
          },
          {
            img: messageTherapist,
            title: 'View pictures, videos, notes, and more.',
            body: 'Users will have the opportunity to view pictures, video and discussions based on the therapy type choice. Users will be able to gain access and valuable information about based users picked. To get more information, go to the discussion page where users and therapist are able to read, view, edit, create, and comment on discussion.',
            rightSide: true,
            altTag: 'Mock'
          }
        ];

        this.technologies = [
          {
            img: reactLogo,
            name: 'React Native',
            altTag: 'React Native'
          },
          {
            img: reduxLogo,
            name: 'Redux',
            altTag: 'Redux'
          },
          {
            img: firebaseLogo,
            name: 'Firebase',
            altTag: 'Firebase'
          }
        ];
    }

    render() {

        const getFeatures = this.features.map((item) => {
          return  <FeatureItemComponent key={item.id} title={item.title} body={item.body} image={item.img} rightSide={item.rightSide} />
        });


        const getTechnologies = this.technologies.map((item) => {
          return <TechItemComponent key={item.id} image={item.img} altTag={item.altTag} />
        });

        return (
            <div>
                <HeaderComponent />

                <main className="main-content">

                    <h1 className="hidden">Main Content</h1>

                    <BannerComponent />

                    <section className="about-us">
                      <div className="container">
                        <div className="row about-us justify-content-md-center">
                          <div className="col-12 col-md-10 col-lg-8">
                            <h2 className="title">We are Body Therapy</h2>
                            <p className="body-text">Body Therapy application is a therapy application. The objective is to help people who needs therapy, access Information about their therapy type, clinic, pictures, and videos. Communicate with their therapist or clinic from their phone. Help users to find therapy clinics based on their selections.</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="features">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <h2 className="title">Features of Body Therapy</h2>
                          </div>
                        </div>

                        {getFeatures}

                      </div>
                    </section>

                    <section className="technologies">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="title">Technologies</h2>
                                </div>
                            </div>
                            <div className="row">

                              {getTechnologies}

                            </div>
                        </div>
                    </section>

                    <AboutMeComponent />

                    <section className="available-on">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="secondary-title">Available on</h2>
                                    <ul className="available-on-links">
                                        <li>
                                            <a href="#">
                                                <img src={googlePlay} alt="Google Play" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
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
