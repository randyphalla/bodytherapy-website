import React, { Component } from 'react';

class TechItemComponent extends Component {
  render() {
    return (
      <div className="col-12 col-sm-4 col-md-3">
        <img src={this.props.image} alt={this.props.altTag} />
      </div>
    );
  }
}

export default TechItemComponent;
