import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Icon from '../../../../../components/Icon';
import LogoutWrapper from './LogoutWrapper';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const onLogout = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/account/logout`, {
      method: 'GET',
      headers: {
        credentials: 'include',
      },
    })
      .then(res => {
        setIsLoggedOut(true);
        return res.json();
      })
      .catch(err => {
        throw err;
      });
  };

  if (isLoggedOut) {
    return <Redirect to="/" />;
  }

  return (
    <LogoutWrapper onClick={onLogout}>
      <Icon name="logout" />
    </LogoutWrapper>
  );
};

export default Logout;
