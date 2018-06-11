import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';

class PetCollection extends Component {

  renderPetList = () => {
    const componentList = this.props.petList.map((pet, index) => {
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

  render() {
    return (
      <section>
        {this.renderPetList()}
      </section>
    );
  }
}

PetCollection.propTypes = {
  petList: PropTypes.array.isRequired,
};

export default PetCollection;
