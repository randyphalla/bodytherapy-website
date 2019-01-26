import React, { Component } from 'react';
import './tech-item.component.css';

class TechItemComponent extends Component {
	render() {
		return (
			<div className="col-12 col-sm-4 col-md-4 col-lg-3 tech-logo">
				<img src={this.props.image} alt="Tech" />
			</div>
		);
	}
}

export default TechItemComponent;
