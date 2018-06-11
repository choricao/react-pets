import React, { Component } from 'react';
import Pet from './components/Pet';
import './App.css';

const PET_LIST = [
  {
    name: 'Bogart',
    age: 8,
    breed: 'Mixed',
    about: 'Bogart was Kirsten\'s Great cat!',
  },
  {
    name: 'Atticus',
    age: 2003,
    breed: 'Irish Wolfhound',
    about: 'Atticus is a senior citizen!',
  },
  {
    name: 'Bagel',
    age: 1,
    breed: 'Beagle',
    about: 'Bagel the Beagle',
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pet
          name={PET_LIST[0].name}
          age={PET_LIST[0].age}
          breed={PET_LIST[0].breed}
          about={PET_LIST[0].about}
          />
      </div>
    );
  }
}

export default App;
