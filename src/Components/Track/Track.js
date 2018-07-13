import React, { Component } from 'react';
import './Track.css'

export class track extends React.Component {

// Below is from stage27 not sure it's right at all!

/*  renderAction() {
      if (this.isRemoval) {
        return <a className="Track-action">-</a>
      } else {
          return <a className="Track-action">+</a>
        }
      } */

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>'track name will go here'</h3>
          <p>'track artist will go here | track album will go here '</p>
        </div>
        <a className="Track-action">' + or - will go here '</a>
      </div>
      )
  }
}
