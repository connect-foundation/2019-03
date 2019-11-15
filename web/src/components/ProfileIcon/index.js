import React from 'react';

import defaultProfile from '../../images/default_profile.png';

import Wrapper from './Wrapper';

const Profile = () => {
  return (
    <Wrapper>
      <img src={defaultProfile} alt="default profile" />
    </Wrapper>
  );
};

export default Profile;
