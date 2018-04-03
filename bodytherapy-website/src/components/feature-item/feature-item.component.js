import React, { Component } from 'react';

class FeatureItemComponent extends Component {
  render() {
    return (
      <div>
        {
          !this.props.rightSide &&
          (
            <div className="row">
              <div className="col-12 col-md-4">
                <img src={this.props.image} alt={this.props.altTag} />
              </div>
              <div className="col-12 col-md-8">
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
              </div>
            </div>
          )
        }

        {
          this.props.rightSide &&
          (
            <div className="row">
              <div className="col-12 col-md-8">
                <h2>Search therapy centres</h2>
                <p>Lorem ipsum dolor sit amet, mandamus corrumpit reprehendunt te pri, veri quodsi vix an. Nam in abhorreant referrentur, his no inani aperiam efficiantur. Ceteros abhorreant id vim, ad nec choro apeirian.</p>
              </div>
              <div className="col-12 col-md-4">
                <img src={this.props.image} alt={this.props.altTag} />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default FeatureItemComponent;
