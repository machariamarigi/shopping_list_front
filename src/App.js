import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import store from './store';
import Landing from './containers/Landing'


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
