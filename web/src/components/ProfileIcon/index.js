import React from 'react';

import defaultProfile from '../../images/default_profile.png';

import Wrapper from './Wrapper';

const Profile = () => {
  return (
    <Wrapper>
      <a href="#">
        <img src={defaultProfile} alt="default profile" />
      </a>
    </Wrapper>
  );
};

export default Profile;
