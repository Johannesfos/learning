import React, { Component } from 'react';

//CSS files
import '../css/bacon.css';

//components




class Bacon extends Component {
  render() {
    return (
      <div id="baconwrap">
        <div id="ingredients1">
          <ul>
            <li>kjøtt</li>
            <li>kylling</li>
          </ul>
        </div>
        <div id="ingredients2">
          <ul>
            <li>kjøtt</li>
            <li>kylling</li>
          </ul>
        </div>
        <div id="ingredients3">
          <ul>
            <li>kjøtt</li>
            <li>kylling</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Bacon;
