import React, { Component } from 'react';
import './feature-item.component.css';

class FeatureItemComponent extends Component {
  render() {
    return (
      <div className="feature-item">
        {
          !this.props.rightSide &&
          (
            <div className="row">
              <div className="col-12 col-md-4">
                <img src={this.props.image} alt={this.props.altTag} />
              </div>
              <div className="col-12 col-md-8 feature-item-info">
                <h2 className="secondary-title">{this.props.title}</h2>
                <p className="body-text">{this.props.body}</p>
              </div>
            </div>
          )
        }

        {
          this.props.rightSide &&
          (
            <div className="row">

              <div className="col-12 col-md-8 feature-item-info right-side show-medium">
                <h2 className="secondary-title">{this.props.title}</h2>
                <p className="body-text">{this.props.body}</p>
              </div>

              <div className="col-12 col-md-4">
                <img src={this.props.image} alt={this.props.altTag} />
              </div>
              
              <div className="col-12 col-md-8 feature-item-info right-side show-mobile-only">
                <h2 className="secondary-title">{this.props.title}</h2>
                <p className="body-text">{this.props.body}</p>
              </div>

            </div>
          )
        }
      </div>
    );
  }
}

export default FeatureItemComponent;
