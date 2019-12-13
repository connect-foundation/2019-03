import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import Icon from '../../../../../components/Icon';
import LogoutWrapper from './LogoutWrapper';
import UserContext from '../../../../App/UserContext';

const Logout = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);

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

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <LogoutWrapper onClick={onLogout}>
      <Icon name="logout" />
    </LogoutWrapper>
  );
};

export default Logout;
