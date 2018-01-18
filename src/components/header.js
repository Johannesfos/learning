import React, { Component } from 'react';

//CSS files
import '../css/header.css';

//components
import Navbar from './navbar';



class Header extends Component {
  render() {
    return (
      <div id="headerWrap">
            <h1>My fun project</h1>
            <Navbar />
      </div>
    );
  }
}

export default Header;
