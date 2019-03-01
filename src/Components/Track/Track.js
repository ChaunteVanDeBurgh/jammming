import React from 'react';
import './Track.css';

class Track extends React.Component {
	renderAction () {
		const trackAction = '+';
		const isRemoval = true;
		if (isRemoval) {
			trackAction = '+';
		} else {
			trackAction = '-'; 
		}
	}
	render() {
		return (
			<div className="Track">
  			<div className="Track-information">
    			<h3>{this.props.track[0].name}</h3>
    			<p>{this.props.track[1].artist} | {this.props.track[2].album} </p>
  			</div>
 				<a className="Track-action">{this.trackAction}</a>
			</div>
		)
	}
}

export default Track;