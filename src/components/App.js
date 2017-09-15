import React, { Component } from 'react';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';
import '../App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: initialMovies
    };

    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header text="iamninja's Movie Mojo App!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={ this.state.movies[key] } />)
          }
        </div>

        <div className="add-movies">
          <button onClick={ this.loadAdditionalMovies }>Load more...</button>
        </div>
      </div>
    );
  }

  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies }
    var newMovies = Object.assign( currentMovies, additionalMovies );

    this.setState({ movies: newMovies });
  }
}

export default App;
