import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [{name: 'song5', artist: 'artist5', album: 'album5', id: '5'},
				{name: 'song6', artist: 'artist6', album: 'album6', id: '6'},
				{name: 'song7', artist: 'artist7', album: 'album7', id: '7'}],
			playListName: 'Favorites',
			playListTracks: [{name: 'song1', artist: 'artist1', album: 'album1', id: '2'},
				{name: 'song2', artist: 'artist2', album: 'album2', id: '3'},
				{name: 'song3', artist: 'artist3', album: 'album3', id: '4'}]
		}
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		this.search = this.search.bind(this);
	}

	addTrack(track) {
		let newPlayList;
		if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  		return;
		}
		newPlayList = this.state.playlistTracks.push(track);
  	this.setState({playlistTracks:newPlayList});
	}

	removeTrack(track) {
		let newPlayList;
		newPlayList = this.state.playlistTracks.filter(song=> {
			return song.id !== track.id
		});
		this.setState({playlistTracks: newPlayList})
	}

	updatePlaylistName(name) {
		this.setState({playlistName: name});
	}

	savePlaylist() {
		const trackURIs = [];
	}

	search(searchTerm) {
		console.log(searchTerm);
	}

	render() {
		return (
			<div>
			  <h1>Ja<span className="highlight">mmm</span>ing</h1>
			  <div className="App">
			    <SearchBar onSearch={this.search} />
			    <div className="App-playlist">
			    	<SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
			    	<Playlist playListName={this.state.playListName} playListTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
			    </div>
			  </div>
			</div>
		)
	}
}

export default App;