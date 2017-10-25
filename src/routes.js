import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './containers/App';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
