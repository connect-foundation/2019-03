import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AccountRoute({ isAuth, children, ...rest }) {
  return (
    <Route {...rest} render={() => (isAuth ? <Redirect to="/" /> : children)} />
  );
}

export default AccountRoute;
