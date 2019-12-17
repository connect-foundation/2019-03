import React from 'react';

import StyledLink from '../../../../components/StyledLink';
import Button from '../../../../components/Button';
import UserNameLabel from './UserNameLabel';
import CountIndicator from './CountIndicator';
import Logout from './Logout';
import {
  UserInfoWrapper,
  UserInfoHeader,
  UserInfoBody,
  UserInfoFooter,
  StyledFollowButton,
  NameWrapper,
} from './styles';

const UserInfo = ({
  username,
  myId,
  data,
  isMyPage,
  onFollowCancel,
  onFollow,
}) => {
  const btnStyle = 'light';
  let button = (
    <StyledFollowButton
      followStatus={data.isFollowing}
      username={username}
      myId={myId}
      userId={data.id}
      onFollowCancel={onFollowCancel}
      onFollow={onFollow}
    />
  );
  if (isMyPage)
    button = (
      <>
        <StyledLink to="/setting/edit/profile">
          <Button btnStyle={btnStyle}>개인정보 설정</Button>
        </StyledLink>
        <Logout />
      </>
    );
  return (
    <UserInfoWrapper>
      <UserInfoHeader>
        <UserNameLabel username={username} />
        {button}
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
