import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';
import axios from 'axios';

class PetCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    }
  }

  componentDidMount = () => {
    console.log('Component did mount was called');

    axios.get('https://petdibs.herokuapp.com/pets')
      .then( (response) => {
        console.log(response.data);
        this.setState({
          pets: response.data,
        });
      })
      .catch( (error) => {
        console.log(error);
        this.setState({
          error: error.message,
        });
      });

  }

  renderPetList = () => {
    console.log('Rendering Pet List');
    const componentList = this.state.pets.map((pet, index) => {
      return (
        <Pet
          key={index}
          name={pet.name}
          age={pet.age}
          breed={pet.breed}
          about={pet.about}
          />
      );
    });

    return componentList;
  }

  renderError = () => {
    if (this.state.error) {
      return (
        <p>{this.state.error}</p>
      );
    }
  }

  addPet = (pet) => {
    const pets = this.state.pets;

    pets.push(pet);
    this.setState({
      pets,
    });
  }

  render() {
    return (
      <section>
        {this.renderError()}
        {this.renderPetList()}
        <NewPetForm addPetCallback={this.addPet} />
      </section>
    );
  }
}

PetCollection.propTypes = {
};

export default PetCollection;
