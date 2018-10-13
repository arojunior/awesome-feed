import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import moment from 'moment-timezone';
import store from './modules';
import apolloClient from './services/apolloClient';
import App from './containers/HomeContainer';
import './assets/App.css';

render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById(`root`),
);

moment.locale(window.navigator.userLanguage || window.navigator.language);
moment.tz.setDefault(moment.tz.guess());
