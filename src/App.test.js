import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

  // test('will match the last snapshot with deep rendering', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper).toMatchSnapshot();
  //   wrapper.unmount();
  // });

  test('that it renders App with shallow rendering', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
