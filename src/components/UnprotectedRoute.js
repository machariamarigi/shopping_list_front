import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UnprotectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (localStorage.getItem('authorization') ? (
        <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      ))}
  />
);

export default UnprotectedRoute;
