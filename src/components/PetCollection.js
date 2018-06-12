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
          message: error.message,
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

  renderMessage = () => {
    if (this.state.message) {
      return (
        <p>{this.state.message}</p>
      );
    }
  }

  addPet = (pet) => {
    const pets = this.state.pets;

    axios.post('https://petdibs.herokuapp.com/pets/', pet)
      .then((response) => {
        pets.push(pet);
        this.setState({
          pets,
          message: `Successfully Added ${pet.name}`
        });
      })
      .catch((error) => {
        this.setState({
          message: error.message,
        });
      });
  }

  render() {
    return (
      <section>
        {this.renderPetList()}
        {this.renderMessage()}
        <NewPetForm addPetCallback={this.addPet} />
      </section>
    );
  }
}

PetCollection.propTypes = {
};

export default PetCollection;
