import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import Icon from '../../../../../components/Icon';
import LogoutWrapper from './LogoutWrapper';

const Logout = () => {
  const client = useApolloClient();
  const onLogout = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/account/logout`, {
      method: 'GET',
      headers: {
        credentials: 'include',
      },
    })
      .then(() => {
        client.writeData({ data: { isLoggedIn: false } });
      })
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
