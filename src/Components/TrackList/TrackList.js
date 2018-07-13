import React, { Component } from 'react';
import { Track } from '../Track/Track'
import './TrackList.css'


export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
          //You will add a map method that renders a set of Track components
          const track = tracks.map((this.props.tracks) =>
            <li key={this.props.track.id}>{this.props.track}</li>
          );
          <Track track={track} />
      </div>
    )
  }
}



/*

** INSTRUCTION **

In the TrackList component, use the .map() method to render each track in the tracks property.
Set the key attribute to track.id.


 ** Explainer from JSX II **

The array method .map() comes up often in React. It's good to get in the habit of using it
alongside JSX.

If you want to create a list of JSX elements, then .map() is often your best bet.
It can look odd at first:

const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

In the above example, we start out with an array of strings. We call .map() on this array of
strings, and the .map() call returns a new array of <li>s.

On the last line of the example, note that {listItems} will evaluate to an array,
because it's the returned value of .map()! JSX <li>s don't have to be in an array
like this, but they can be.

// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

const liArray = [
  <li>item 1</li>,
  <li>item 2<li>,
  <li>item 3</li>
];

<ul>{liArray}</ul>

 ** Example from JSX II **

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

*/
