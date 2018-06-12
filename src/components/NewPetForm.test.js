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

  test('when the user types on a field the value changes', () => {
    const wrapper = shallow( <NewPetForm addPetCallback={() => {}} />);

    const fieldValues = [
      {
        field: 'name',
        value: 'Bob',
      },
      {
        field:  'breed',
        value: 'Pomeranian',
      },
      {
        field: 'age',
        value: 6,
      },
      {
        field: 'about',
        value: 'fun breed',
      }
    ];

    fieldValues.forEach(({field, value}) => {
      let element = wrapper.find(`[name="${field}"]`);

      element.simulate('change', {target: {
        name: field,
        value,
      }});
      wrapper.update();

      element = wrapper.find(`[name="${field}"]`);
      expect(element.getElement().props.value).toEqual(value);
    });
  });

  test('NewPetForm can submit', () => {    
    const wrapper = shallow(<NewPetForm
      addPetCallback={() => {}}
      />);

    wrapper.find(`[name="name"]`).simulate('change', {
      target: {
        name: 'name',
        value: 'bob',
      }
    });
    wrapper.find(`[name="age"]`).simulate('change', {
      target: {
        name: 'age',
        value: 5,
      }
    });
    wrapper.update();

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    wrapper.update();

    const nameField = wrapper.find(`[name="name"]`);
    expect(nameField.getElement().props.value).toEqual('');
  });
});
