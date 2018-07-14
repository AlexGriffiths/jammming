import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {searchResults: [
        {name: 'song1', artist: 'artist1', album: 'album1', id: '123'},
        {name: 'song2', artist: 'artist2', album: 'album2', id: '456'},
        {name: 'song3', artist: 'artist3', album: 'album3', id: '789'}
        ],
        playlistName: 'griffPlaylist',
        playlistTracks: [
          {name: 'song1', artist: 'artist1', album: 'album1', id: '123'},
          {name: 'song2', artist: 'artist2', album: 'album2', id: '456'}
        ]
     }

     this.addTrack = this.addTrack.bind(this);
     this.removeTrack = this.removeTrack.bind(this);
     this.updatePlaylistName = this.updatePlaylistName.bind(this);

  }

  updatePlayListName(name) {
    this.setState({playListName: name});
  }


  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
    }
    else {
      this.state.playlistTracks.push(track);
      this.setState({playListTracks: this.state.playlistTracks});
    }
  }

  removeTrack(track) {
    this.state.playListTracks = this.state.playListTracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playListTracks: this.state.playListTracks});
  }


  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          // -- Add a SearchBar component --
            <div class="App-playlist">
              <SearchResults searchResults = {this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist
                name={this.state.playlistName}
                tracks={this.state.playlistTracks}
                onRemove ={this.removeTrack}
                onNameChange={this.updatePlayListName} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
