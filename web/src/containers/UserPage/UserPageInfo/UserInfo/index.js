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

const UserInfo = ({ username, data }) => {
  return (
    <UserInfoWrapper>
      <UserInfoHeader>
        <UserNameLabel username={username} />
        <StyledFollowButton />
      </UserInfoHeader>
      <UserInfoBody>
        <CountIndicator data={data} />
      </UserInfoBody>
      <UserInfoFooter>
        <NameWrapper>{data.name}</NameWrapper>
      </UserInfoFooter>
    </UserInfoWrapper>
  );
};

export default UserInfo;
