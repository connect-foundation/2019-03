import React, { useState } from 'react';

import { LikeInfoWrapper } from './styles';
import ContentForOne from './ContentForOne';
import ContentForMany from './ContentForMany';
import UserListModal from './UserListModal';

const LikeInfo = ({ id, userList }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onToggle = () => {
    setIsVisible(!isVisible);
  };

  const { length } = userList;
  let likeInfoContent = null;

  if (length === 1) {
    likeInfoContent = (
      <ContentForOne id={id} user={userList[0]} onClick={onToggle} />
    );
  } else if (length >= 2) {
    likeInfoContent = (
      <ContentForMany id={id} userList={userList} onClick={onToggle} />
    );
  }

  return (
    <LikeInfoWrapper>
      {likeInfoContent}
      {isVisible && <UserListModal onClick={onToggle} />}
    </LikeInfoWrapper>
  );
};

export default LikeInfo;
