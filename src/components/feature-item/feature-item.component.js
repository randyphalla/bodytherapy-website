//@flow
import React, { Component } from 'react';
import './feature-item.component.css';

export type FeatureProps = {
	rightSide: boolean,
	image: string,
	altTag: string,
	title: string,
	body: string,
};

export type FeatureState = {};

class FeatureItemComponent extends Component<FeatureProps, FeatureState> {
	render() {
		return (
			<div className="feature-item">
				{this.props.rightSide ? (
					<div className="row">
						<div className="col-12 col-md-8 feature-item-info right-side show-medium">
							<h2 className="secondary-title">{this.props.title}</h2>
							<p className="body-text">{this.props.body}</p>
						</div>

						<div className="col-12 col-md-4">
							<img src={this.props.image} alt="Mobile" />
						</div>

						<div className="col-12 col-md-8 feature-item-info right-side show-mobile-only">
							<h2 className="secondary-title">{this.props.title}</h2>
							<p className="body-text">{this.props.body}</p>
						</div>
					</div>
				) : (
					<div className="row">
						<div className="col-12 col-md-4">
							<img src={this.props.image} alt="Mobile" />
						</div>
						<div className="col-12 col-md-8 feature-item-info">
							<h2 className="secondary-title">{this.props.title}</h2>
							<p className="body-text">{this.props.body}</p>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default FeatureItemComponent;
