import React, { Component } from 'react';
import Header from './Header';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="iamninja's Movie Mojo App!" />
        <p className="App-intro">
          Welcome to the 'Movie Mojo oMDb' React app!
        </p>
      </div>
    );
  }
}

export default App;
