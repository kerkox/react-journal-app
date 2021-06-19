import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../componentes/auth/LoginScreen'
import { RegisterScreen } from '../componentes/auth/RegisterScreen'

export const AuthRouter = () => {
  
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginScreen} />
      <Route exact path="/auth/register" component={RegisterScreen} />
      <Route>
        <Redirect to="/auth/login" />
      </Route>
    </Switch>
  );
}
