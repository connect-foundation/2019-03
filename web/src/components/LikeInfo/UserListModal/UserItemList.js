import React from 'react';
import UserItem from './UserItem';

const UserItemList = ({ userList }) => {
  const userItemList = userList.map(user => (
    <UserItem key={user.username} user={user} />
  ));

  return <>{userItemList}</>;
};

export default UserItemList;
