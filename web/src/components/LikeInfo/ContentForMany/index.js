import React from 'react';

import defaultImage from '../../../images/default_profile.png';

import { ProfileImage, UserLink, LikeCount } from '../styles';

const ContentForMany = ({ id, userList, onClick }) => {
  const length = userList.length;
  const { username, profileImage } = userList.find(user => user.id !== id);
  const imageUrl = profileImage ? profileImage : defaultImage;

  return (
    <>
      <ProfileImage onClick={onClick} imageUrl={imageUrl} />
      <UserLink to={username}>{username}</UserLink>님&nbsp;
      <LikeCount onClick={onClick}>외 {length - 1}명</LikeCount>이 좋아합니다.
    </>
  );
};

export default ContentForMany;
