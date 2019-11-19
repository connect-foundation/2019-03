import React, { useState } from 'react';

import { LikeInfoWrapper } from './styles';
import ContentForOne from './ContentForOne';
import ContentForMany from './ContentForMany';

const LikeInfo = ({ id, userList }) => {
  const length = userList.length;
  let likeInfoContent = null;

  if (length === 1)
    likeInfoContent = <ContentForOne id={id} user={userList[0]} />;
  else if (length >= 2)
    likeInfoContent = <ContentForMany id={id} userList={userList} />;

  return <LikeInfoWrapper>{likeInfoContent}</LikeInfoWrapper>;
};

export default LikeInfo;
