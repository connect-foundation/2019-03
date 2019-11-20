import React from 'react';

import Wrapper from './Wrapper';

const Profile = ({ imgSrc }) => {
  const images = require.context('../../images', true);
  const img = images(`./${imgSrc}`);
  return (
    <Wrapper>
      <img src={img} alt="default profile" />
    </Wrapper>
  );
};

Profile.defaultProps = {
  imgSrc: 'default_profile.png',
};

export default Profile;
