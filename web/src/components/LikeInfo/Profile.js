import React from 'react';
import ProfileIcon from '../ProfileIcon';

const LENGTH = 25;
const style = {
  marginRight: '5px',
  borderRadius: '50%',
  width: `${LENGTH}px`,
  height: `${LENGTH}px`,
};

const Profile = ({ onClick, ...props }) => {
  return (
    <div onClick={onClick}>
      <ProfileIcon {...props} style={style} />
    </div>
  );
};

export default Profile;
