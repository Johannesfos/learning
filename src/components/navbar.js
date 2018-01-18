import React, { Component } from 'react';
import '../css/header.css';


class Navbar extends Component {


  render() {
    return (
            <ul id="navigate">
                <li id="navigate">Projects</li>
                <li id="navigate">Bacon</li>
                <li id="navigate">About</li>
            </ul>
    );
  }
}

export default Navbar;
