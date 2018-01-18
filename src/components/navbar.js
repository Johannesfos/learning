import React, { Component } from 'react';
import '../css/header.css';


class Navbar extends Component {
  render() {
    return (
            <ul className="navbar">
                <li>Projects</li>
                <li>Bacon</li>
                <li>About</li>
            </ul>
    );
  }
}

export default Navbar;
