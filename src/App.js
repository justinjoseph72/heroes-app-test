import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dcComics from './img/DC.png';
import marvelComics from './img/Marvel.png';

function Home(){
  return (
    <div>
      <h1>Welcome to the Heroes App!!!</h1>
      <div className='container'>
        <div className='column'>
          <img src={dcComics} alt="this is DC logo"/>
        </div>
        <div className='column'>
          <img src={marvelComics} alt="this is Marvel logo"/>
        </div>
      </div>
      </div>

  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home/>
      </div>
    );
  }
}

export default App;
