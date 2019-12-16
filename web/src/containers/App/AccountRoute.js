import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AccountRoute({ data, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (data.isLoggedIn ? <Redirect to="/" /> : children)}
    />
  );
}

export default AccountRoute;
