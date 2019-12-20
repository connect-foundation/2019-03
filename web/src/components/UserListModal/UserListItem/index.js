import React from 'react';

import ProfileIcon from '../../ProfileIcon';
import FollowButton from '../../FollowButton';
import StyledLink from '../../StyledLink';
import UserListItemWrapper from './UserListItemWrapper';

const UserListItem = ({ userInfo, myId, ...props }) => {
  const { id, name, username, profileImage, isFollow } = userInfo;
  const profileImageRatio = 9.375;
  const userpageURL = `/${username}`;

  const getFollowButton = () => {
    if (myId === id) return <></>;
    return (
      <FollowButton
        followStatus={isFollow}
        username={username}
        myId={myId}
        userId={id}
      />
    );
  };

  return (
    <UserListItemWrapper {...props}>
      <StyledLink to={userpageURL}>
        <ProfileIcon imageURL={profileImage} ratio={profileImageRatio} />
      </StyledLink>
      <section>
        <div>
          <StyledLink to={userpageURL}>{username}</StyledLink>
        </div>
        <span>{name}</span>
      </section>
      <div>{getFollowButton()}</div>
    </UserListItemWrapper>
  );
};

export default UserListItem;
