import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {SearchResults: [
        {name: 'song1',
         artist: 'artist1',
         album: 'album1',
         id: '123'},
         {name:'song2' ,
          artist:'artist2' ,
          album:'album2' ,
          id:'456'    },
          {name:'song3' ,
           artist: 'artist3',
           album: 'album3',
           id: '789'   }
      ]
    }
  }

  render() {
    return (
    <div>
		  <h1>Ja<span className="highlight">mmm</span>ing</h1>
		  <div className="App">
			  <div className="App-playlist">
			  </div>
		  </div>
		</div>

    );
  }
}

export default App;
