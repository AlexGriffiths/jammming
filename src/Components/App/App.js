import React, {Component} from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify.js';



class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        searchResults: [],
        playlistName: 'New Playlist',
        playlistTracks: []
      }

     this.addTrack = this.addTrack.bind(this);
     this.removeTrack = this.removeTrack.bind(this);
     this.updatePlaylistName = this.updatePlaylistName.bind(this);
     this.savePlaylist = this.savePlaylist.bind(this);
     this.search = this.search.bind(this);
  }


  updatePlayListName(name) {
    this.setState({playListName: name});
  }


  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName('griffPlaylist');
    console.info(trackUris);
  }


  addTrack(track) {
      let tracks = this.state.playListTracks;
      if (!tracks.includes(track)) {
        tracks.push(track);
        this.setState({playListTracks: tracks});
      }
    }


  removeTrack(track) {
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playListTracks: tracks});
  }


  search(term) {
    Spotify.search(term).then(searchResults => this.setState({searchResults: searchResults}));
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults searchResults = {this.state.searchResults} onAdd={this.addTrack}/>
              <Playlist
                name={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove ={this.removeTrack}
                onNameChange={this.updatePlayListName}
                onSave={this.savePlaylist} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
