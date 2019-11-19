import React from 'react';

import {
  ProfileIcon,
  InfoWrapper,
  ItemWrapper,
  FollowButton,
  Username,
  Name,
} from './styles';

const UserItem = ({ user }) => {
  const { username, name, profileImage } = user;

  return (
    <ItemWrapper>
      <ProfileIcon imgSrc={profileImage} />
      <InfoWrapper>
        <Username>{username}</Username>
        <Name>{name}</Name>
      </InfoWrapper>
      <FollowButton>팔로우</FollowButton>
    </ItemWrapper>
  );
};

export default UserItem;
