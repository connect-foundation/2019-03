import React from 'react';

import NoResultWrapper from './NoResultWrapper';

const NoResult = ({ listName }) => {
  return (
    <NoResultWrapper>
      <span>{listName}가 없습니다.</span>
    </NoResultWrapper>
  );
};

export default NoResult;
