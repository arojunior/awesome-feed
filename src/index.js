import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import moment from 'moment-timezone';
import store from './modules';
import history from './history';
import apolloClient from './services/apolloClient';
import App from './containers/HomeContainer';
import 'assets/App.css';

render(
  <Router history={history}>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </Router>,
  document.getElementById(`root`),
);

moment.tz.setDefault(moment.tz.guess());
