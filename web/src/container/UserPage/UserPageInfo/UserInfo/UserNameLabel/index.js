import React from 'react';

import UserNameLabelWrapper from './UserNameLabelWrapper';

const UserNameLabel = ({ username }) => {
  return <UserNameLabelWrapper>{username}</UserNameLabelWrapper>;
};

export default UserNameLabel;
