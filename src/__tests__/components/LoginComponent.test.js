import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../../components/LoginComponent';

describe(`LoginComponent`, () => {
  test(`Snapshot`, () => {
    const props = { setGithubLogin: jest.fn(), handleChange: jest.fn(), onKeyPress: jest.fn() };
    const wrapper = shallow(<LoginComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
