import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [{name: 'God Dream'},{artist: 'Chaunte'},{album: 'The Myth of God'},{id: '1'}],
			playListName: 'Favorites',
			playListTracks: [{name: 'song1', artist: 'artist1', album: 'album1', id: 1},
				{name: 'song2', artist: 'artist2', album: 'album2', id: 2},
				{name: 'song3', artist: 'artist3', album: 'album3', id: 3}]
		}
		this.addTrack = this.addTrack.bind(this);
	}

	addTrack(track) {
		if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  		return;
		}
		const newPlayList = this.state.playListTracks.push(track);
		this.setState({playListTracks: newPlayList});
	}

	render() {
		return (
			<div>
			  <h1>Ja<span className="highlight">mmm</span>ing</h1>
			  <div className="App">
			    {/* Add a SearchBar component */}
			    <div className="App-playlist">
			    	<SearchResults searchResults={this.state.searchResults} />
			    	<Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks} />
			    </div>
			  </div>
			</div>
		)
	}
}

export default App;