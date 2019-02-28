import React form 'react';
import './Track.css';

class Track extends React.Component {
	renderAction () {
		let trackAction
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
    			<h3>// track name will go here </h3>
    			<p>// track artist will go here | track album will go here </p>
  			</div>
 				<a className="Track-action">{trackAction}</a>
			</div>
		)
	}
}

export default Track;