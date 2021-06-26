import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types'

export const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.protoTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
