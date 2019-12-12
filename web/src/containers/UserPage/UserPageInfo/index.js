import React from 'react';

import ProfileIcon from '../../../components/ProfileIcon';
import UserInfo from './UserInfo';
import { UserPageInfoWrapper, ProfileIconWrapper } from './styles';

const UserPageInfo = ({ username, myId, data }) => {
  return (
    <UserPageInfoWrapper>
      <ProfileIconWrapper>
        <ProfileIcon imageURL={data.profileImage} ratio={46.875} />
      </ProfileIconWrapper>
      <UserInfo username={username} myId={myId} data={data} />
    </UserPageInfoWrapper>
  );
};

export default UserPageInfo;
