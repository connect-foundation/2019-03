import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AccountRoute({ myInfo, children, ...rest }) {
  return (
    <Route {...rest} render={() => (myInfo ? <Redirect to="/" /> : children)} />
  );
}

export default AccountRoute;
