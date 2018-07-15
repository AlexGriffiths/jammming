import React from 'react';
import { TrackList } from '../TrackList/TrackList'
import './Playlist.css'

export class Playlist extends React.Component {

  constructor(props) {
      super(props);

      this.handleNameChange = this.handleNameChange.bind(this);

    }

  handleNameChange(event) {
      this.props.onNameChange(event.target.value);
    }

  render() {
    return (
      <div className="Playlist">
      /*  <input defaultValue = {'New Playlist'}/> */
      <input value={this.props.name}
             onChange={this.handleNameChange} />
        <TrackList tracks={this.props.playlistTracks}
                   isRemoval = {true}
                   onRemove={this.props.onRemove}
                   onChange={this.props.handleNameChange} />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
