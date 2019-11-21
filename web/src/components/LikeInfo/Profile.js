import React from 'react';
import ProfileIcon from '../ProfileIcon';

const LENGTH = 25;
const ProfileIconStyle = {
  marginRight: '5px',
  borderRadius: '50%',
  width: `${LENGTH}px`,
  height: `${LENGTH}px`,
};

const Profile = ({ onClick, ...props }) => {
  return (
    <div onClick={onClick}>
      <ProfileIcon {...props} style={ProfileIconStyle} />
    </div>
  );
};

export default Profile;
