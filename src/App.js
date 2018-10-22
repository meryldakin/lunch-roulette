import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GeneratorContainer from './Components/GeneratorContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneratorContainer/>
      </div>
    );
  }
}

export default App;
