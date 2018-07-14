import React, { Component } from 'react';
import { Track } from '../Track/Track'
import './TrackList.css'


export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
          //You will add a map method that renders a set of Track components
          {this.props.tracks.map(track => <Track key={track.id} track={track} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>)}
      </div>
    )
  }
}
