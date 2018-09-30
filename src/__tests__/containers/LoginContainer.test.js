import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from 'modules';
import { setUsername } from 'modules/Login/actions';
import LoginContainer from 'containers/LoginContainer';
import LoginComponent from 'components/LoginComponent';

describe(`LoginContainer`, () => {
  const wrapper = mount(
    <Provider store={store}>
      <LoginContainer />
    </Provider>,
  );

  const Component = wrapper.find(LoginComponent);

  beforeEach(() => {
    store.dispatch(setUsername(null));
  });

  test(`Username local state change`, () => {
    Component.props().handleChange({
      currentTarget: { value: `arojunior` },
    });
    wrapper.update();
    expect(wrapper.find(LoginComponent).props().username).toBe(`arojunior`);
  });

  test(`Username store state change with enter keypress`, () => {
    Component.props().onKeyPress({
      keyCode: 13,
    });
    wrapper.update();
    expect(store.getState().Login.username).toBe(`arojunior`);
  });

  test(`Username store state dot not change with another keypress but enter`, () => {
    Component.props().onKeyPress({
      keyCode: 9,
    });
    wrapper.update();
    expect(store.getState().Login.username).toBeNull();
  });

  test(`Username store state change with button click`, () => {
    Component.find(`a[role="button"]`).simulate(`click`);
    wrapper.update();
    expect(store.getState().Login.username).toBe(`arojunior`);
  });
});
