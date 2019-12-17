import React from 'react';

import ProfileIcon from '../../ProfileIcon';
import FollowButton from '../../FollowButton';
import StyledLink from '../../StyledLink';

const UserListItem = ({ userInfo, myId }) => {
  const { id, name, username, profileImage, isFollow } = userInfo;
  const profileImageRatio = 9.375;
  const userpageURL = `/${username}`;
  return (
    <li>
      <StyledLink to={userpageURL}>
        <ProfileIcon imageURL={profileImage} ratio={profileImageRatio} />
      </StyledLink>
      <section>
        <div>
          <StyledLink to={userpageURL}>{username}</StyledLink>
        </div>
        <span>{name}</span>
      </section>
      <div>
        <FollowButton
          followStatus={isFollow}
          username={username}
          myId={myId}
          userId={id}
        />
      </div>
    </li>
  );
};

export default UserListItem;
