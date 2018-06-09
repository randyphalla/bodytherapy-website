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
                <img src="" alt="" />
                </div>

                <div className="col-12 col-md-8">
                <h2 className="title title-left">Randy Phalla</h2>
                <h3 className="secondary-title">Front End Developer / Graphic Designer</h3>
                <p className="body-text">Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian. Ea sea denique phaedrum. Has ne duis conclusionemque, vel quando malorum an, te mei essent iuvaret facilisis. Oblique dissentias quaerendum duo ea, congue doming singulis vis ne, pro id nisl aliquam sanctus.</p>
                <button className="resume-btn">Resume</button>
                </div>
            </div>

            </div>

        </section>
    );
  }
}

export default AboutMeComponent;
