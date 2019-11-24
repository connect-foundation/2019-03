import React from 'react';

import ProfileIconWrapper from './ProfileIconWrapper';

/**
imSrc: 이미지의 소스
ratio: 이미지의 비율. 10이 기본이며, 증가할수록 커진다. 
 */
const ProfileIcon = ({ imgSrc, ratio, style }) => {
  // const images = require.context('../../images', true);
  // const img = images(`./${imgSrc}`);
  return <ProfileIconWrapper img={imgSrc} ratio={ratio} style={style} />;
};

ProfileIcon.defaultProps = {
  imgSrc: 'default_profile.png',
  ratio: 10,
};

export default ProfileIcon;
