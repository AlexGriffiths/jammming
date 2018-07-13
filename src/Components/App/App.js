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
        {name: '',
         artist: '',
         album: '',
         id: ''   },
         {name:'' ,
          artist:'' ,
          album:'' ,
          id:''    },
          {name:'' ,
           artist: '',
           album: '',
           id: ''   }
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
