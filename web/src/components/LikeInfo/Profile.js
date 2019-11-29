/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ProfileIcon from '../ProfileIcon';

const LENGTH = 25;
const ProfileIconStyle = {
  marginRight: '5px',
  borderRadius: '50%',
  width: `${LENGTH}px`,
  height: `${LENGTH}px`,

  cursor: 'pointer',
};

const Profile = ({ ratio, imageURL, onClick }) => {
  return (
    <div onClick={onClick}>
      <ProfileIcon ratio={ratio} imageURL={imageURL} style={ProfileIconStyle} />
    </div>
  );
};

export default Profile;
