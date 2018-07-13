import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList'
import './Playlist.css'

export class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue = {'New Playlist'}/>
        <TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
