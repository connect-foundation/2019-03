import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ myInfo, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (myInfo ? children : <Redirect to="/account/signin" />)}
    />
  );
}

export default AuthRoute;
