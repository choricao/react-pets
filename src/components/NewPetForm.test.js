import React from 'react';
import NewPetForm from './NewPetForm';
import { mount, shallow } from 'enzyme';

describe('NewPetForm', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount(<NewPetForm
      addPetCallback={() => {}}
      />);

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    // Remove the component from the DOM (save memory and prevent side effects).
    wrapper.unmount();
  });

  test('When a user enters a name in a text field the field is updated', () => {
    // Arrange
    const wrapper = shallow(<NewPetForm
      addPetCallback={() => {}}
      />);
    let nameField = wrapper.find('input[name="name"]');

    // Act
    nameField.simulate('change', {
      target: {
        name: 'name',
        value: 'Bob',
      }
    });
    // Force the onChange event
    wrapper.update();
    nameField = wrapper.find('input[name="name"]');

    // Assert
    expect(nameField.getElement().props.value).toEqual('Bob');
  });
});
