import React, { Component } from 'react';

import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import FeatureItemComponent from './components/feature-item/feature-item.component';
import TechItemComponent from './components/tech-Item/tech-item.component';

import messageTherapist from './assets/images/message-therapist.png';

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
        console.log('Features ', this.features);

        this.technologies = [];

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
                <section className="main-content">
                    <h1 className="hidden">Main Content</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>We are Body Therapy</h2>
                                <p>Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian. Ea sea denique phaedrum. Has ne duis conclusionemque, vel quando malorum an, te mei essent iuvaret facilisis. Oblique dissentias quaerendum duo ea, congue doming singulis vis ne, pro id nisl aliquam sanctus.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2>Features of Body Therapy</h2>
                            </div>
                        </div>

                        <FeatureItemComponent title="Message Therapist" body="body description" image={messageTherapist} />

                        <FeatureItemComponent title="Message Therapist" body="body description" image={messageTherapist} rightSide="true" />

                        <FeatureItemComponent title="Message Therapist" body="body description" image={messageTherapist} />

                        <div className="row">
                            <div className="col-12">
                                <h2>Technologies</h2>
                            </div>
                        </div>
                        <div className="row">
                            <TechItemComponent />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2>Creator of Body Therapy</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src="" alt="" />
                            </div>
                            <div className="col-12 col-md-8">
                                <h2>Randy Phalla</h2>
                                <h3>Front End Developer / Graphic Designer</h3>
                                <p>Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian. Ea sea denique phaedrum. Has ne duis conclusionemque, vel quando malorum an, te mei essent iuvaret facilisis. Oblique dissentias quaerendum duo ea, congue doming singulis vis ne, pro id nisl aliquam sanctus.</p>
                                <button className="btn btn-primary">Resume</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2>Available on</h2>
                                <ul>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterComponent />
            </div>
        );
    }
}

export default App;
