import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ data, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        data.isLoggedIn ? children : <Redirect to="/account/signin" />
      }
    />
  );
}

export default AuthRoute;
