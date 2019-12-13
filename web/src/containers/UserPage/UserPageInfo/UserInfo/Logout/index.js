import React from 'react';

import Icon from '../../../../../components/Icon';
import LogoutWrapper from './LogoutWrapper';

const Logout = () => {
  const onLogout = () => {
    fetch(`${process.env.REACT_APP_API_URL}/account/logout`, {
      method: 'GET',
      headers: {
        credentials: 'include',
      },
    })
      .then(() => {})
      .catch(err => {
        throw err;
      });
  };

  return (
    <LogoutWrapper onClick={onLogout}>
      <Icon name="logout" />
    </LogoutWrapper>
  );
};

export default Logout;
