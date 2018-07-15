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
        playListName: 'New Playlist',
        playListTracks: []
      }

     this.addTrack = this.addTrack.bind(this);
     this.removeTrack = this.removeTrack.bind(this);
     this.updatePlayListName = this.updatePlayListName.bind(this);
     this.savePlaylist = this.savePlaylist.bind(this);
     this.search = this.search.bind(this);
  }


  updatePlayListName(name) {
    this.setState({playListName: name});
  }


  savePlaylist() {
    const trackUris = this.state.playListTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playListName, trackUris);
    this.setState({
      searchResults: []
    });
      this.updatePlayListName('New Playlist');
//    this.updatePlayListName('New Playlist');
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
                name={this.state.playListName}
                playlistTracks={this.state.playListTracks}
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
