import React, { Component } from 'react';
import PetCollection from './components/PetCollection';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PetCollection />
      </div>
    );
  }
}

export default App;
