import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from '@cypress/react';
import App from './app';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('renders App component', () => {
  mount(
    <Provider store={mockStore({ globalReducer: { isAuthenticated: true } })}>
      <App />
    </Provider>
  );
  cy.contains('Home');
});
