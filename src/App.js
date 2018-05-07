import React, { Component } from 'react';

import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import FeatureItemComponent from './components/feature-item/feature-item.component';
import TechItemComponent from './components/tech-Item/tech-item.component';

import messageTherapist from './assets/images/message-therapist.png';
import bannerImage from './assets/images/hero-image.png';

import reactLogo from './assets/images/react-logo.png';
import reduxLogo from './assets/images/redux-logo.png';
import firebaseLogo from './assets/images/firebase-logo.png';

import './App.css';

class App extends Component {
    features;
    technologies;
    socials;

    constructor(props) {
        super(props);

        this.features = [
          {
            img: '',
            title: 'Search therapy centres',
            body: 'Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian. ',
            rightSide: true
          },
          {
            img: '',
            title: 'Message Therapist',
            body: 'Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian. ',
            rightSide: false
          },
          {
            img: '',
            title: 'View pictures, videos, notes, and more.',
            body: 'Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian.',
            rightSide: true
          }
        ];

        this.technologies = [
          {
            img: '',
            altTag: ''
          },
          {
            img: '',
            altTag: ''
          },
          {
            img: '',
            altTag: ''
          }
        ];

        this.socials = [
          {
            iconClass: '',
            altTag: '',
            link: ''
          },
          {
            iconClass: '',
            altTag: '',
            link: ''
          },
          {
            iconClass: '',
            altTag: '',
            link: ''
          }
        ];
    }

    render() {
        return (
            <div>
                <HeaderComponent />

                <main className="main-content">

                    <h1 className="hidden">Main Content</h1>

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

                    <section className="about-us">
                      <div className="container">
                        <div className="row about-us justify-content-md-center">
                          <div className="col-12 col-md-10 col-lg-8">
                            <h2 className="title">We are Body Therapy</h2>
                            <p className="body-text">Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian. Ea sea denique phaedrum. Has ne duis conclusionemque, vel quando malorum an, te mei essent iuvaret facilisis. Oblique dissentias quaerendum duo ea, congue doming singulis vis ne, pro id nisl aliquam sanctus.</p>
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

                        <FeatureItemComponent title="Message Therapist" body="body description" image={messageTherapist} />

                        <FeatureItemComponent title="Message Therapist" body="body description" image={messageTherapist} rightSide="true" />

                        <FeatureItemComponent title="Message Therapist" body="body description" image={messageTherapist} />
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
                          <TechItemComponent image={reactLogo} altTag="React" />

                          <TechItemComponent image={reduxLogo} altTag="Redux" />

                          <TechItemComponent image={firebaseLogo} altTag="Firebase" />
                        </div>
                      </div>
                    </section>

                    <section className="about-me">

                      <div className="container">

                        <div className="row">
                          <div className="col-12">
                            <h2 className="title">Creator of Body Therapy</h2>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-12 col-md-4">
                            <img src="" alt="" />
                          </div>

                          <div className="col-12 col-md-8">
                            <h2 className="title">Randy Phalla</h2>
                            <h3 className="secondary-title">Front End Developer / Graphic Designer</h3>
                            <p className="body-text">Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian. Ea sea denique phaedrum. Has ne duis conclusionemque, vel quando malorum an, te mei essent iuvaret facilisis. Oblique dissentias quaerendum duo ea, congue doming singulis vis ne, pro id nisl aliquam sanctus.</p>
                            <button className="btn btn-primary">Resume</button>
                          </div>
                        </div>

                      </div>

                    </section>

                    <section className="available-on">
                      <div className="container">
                        <div className="row">
                              <div className="col-12">
                                  <h2 className="secondary-title">Available on</h2>
                                  <ul>
                                      <li></li>
                                      <li></li>
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
