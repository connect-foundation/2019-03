import React, { useContext } from 'react';

import Icon from '../../../../../components/Icon';
import LogoutWrapper from './LogoutWrapper';
import UserContext from '../../../../App/UserContext';

const Logout = () => {
  const { setIsAuth } = useContext(UserContext);

  const onLogout = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/account/logout`, {
      method: 'GET',
      headers: {
        credentials: 'include',
      },
    })
      .then(() => {
        setIsAuth(false);
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
