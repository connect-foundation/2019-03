import React from 'react';

import UserNameLabel from './UserNameLabel';
import CountIndicator from './CountIndicator';
import {
  UserInfoWrapper,
  UserInfoHeader,
  UserInfoBody,
  UserInfoFooter,
  StyledFollowButton,
  NameWrapper,
} from './styles';

const UserInfo = ({ username }) => {
  return (
    <UserInfoWrapper>
      <UserInfoHeader>
        <UserNameLabel username={username} />
        <StyledFollowButton />
      </UserInfoHeader>
      <UserInfoBody>
        <CountIndicator />
      </UserInfoBody>
      <UserInfoFooter>
        <NameWrapper>Name</NameWrapper>
      </UserInfoFooter>
    </UserInfoWrapper>
  );
};

export default UserInfo;
