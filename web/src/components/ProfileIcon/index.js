import React from 'react';

import ProfileIconWrapper from './ProfileIconWrapper';

/**
imSrc: 이미지의 소스
ratio: 이미지의 비율. 10이 기본이며, 증가할수록 커진다. 
 */
const ProfileIcon = ({ imageURL, ratio, style }) => {
  return <ProfileIconWrapper imageURL={imageURL} ratio={ratio} style={style} />;
};

const defaultProfileImage =
  'https://kr.object.ncloudstorage.com/youngstargram/default.png';

ProfileIcon.defaultProps = {
  imageURL: defaultProfileImage,
  ratio: 10,
};

export default ProfileIcon;
