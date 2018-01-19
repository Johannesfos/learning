import React, { Component } from 'react';
import Header from "./components/header";
import Bacon from './components/baconwrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Bacon />
      </div>
    );
  }
}

export default App;
