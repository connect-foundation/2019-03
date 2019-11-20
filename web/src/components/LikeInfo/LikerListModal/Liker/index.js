import React from 'react';

import {
  ProfileIcon,
  LikerInfoWrapper,
  LikerWrapper,
  FollowButton,
  Username,
  Name,
} from './styles';

const Liker = ({ liker }) => {
  const { username, name, profileImage } = liker;

  return (
    <LikerWrapper>
      <ProfileIcon imgSrc={profileImage} />
      <LikerInfoWrapper>
        <Username>{username}</Username>
        <Name>{name}</Name>
      </LikerInfoWrapper>
      <FollowButton>팔로우</FollowButton>
    </LikerWrapper>
  );
};

export default Liker;
