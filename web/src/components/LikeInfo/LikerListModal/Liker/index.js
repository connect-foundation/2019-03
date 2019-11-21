import React from 'react';

import {
  LikerInfoWrapper,
  LikerWrapper,
  FollowButton,
  Username,
  Name,
} from './styles';
import ProfileIcon from '../../../ProfileIcon';

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
