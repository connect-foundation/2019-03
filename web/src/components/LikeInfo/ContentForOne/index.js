import React from 'react';

import defaultImage from '../../../images/default_profile.png';

import { ProfileImage, LikeCount } from '../styles';

const ContentForOne = ({ id, user, onClick }) => {
  // 자기 자신일 경우
  if (user.id === id) {
    return <LikeCount onClick={onClick}>좋아요 1개</LikeCount>;
  }

  // 다른 사람일 경우
  const imageUrl = user.profileImage ? user.profileImage : defaultImage;
  return (
    <>
      <ProfileImage onClick={onClick} imageUrl={imageUrl} />
      <LikeCount onClick={onClick}>좋아요 1개</LikeCount>
    </>
  );
};

export default ContentForOne;
