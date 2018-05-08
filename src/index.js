import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomeRoute from './components/home-route';
import store from './store';

function BasicExample() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={HomeRoute} />
      </Router>
    </Provider>
  );
}


render(
  <BasicExample />,
  document.getElementById('container')
);
