import React from 'react';
import AuthService from 'utils/AuthService';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, redirectPath, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.loggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectPath,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
