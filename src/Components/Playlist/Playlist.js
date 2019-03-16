import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}

	handleNameChange(e) {
		const name = e.target.value;
		this.props.onNameChange(name);
	}

	render() {
		return (
			<div className="Playlist">
  			<input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
  			<TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove} isRemoval={true} />
  			<a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
			</div>
		)
	}
}

export default Playlist;