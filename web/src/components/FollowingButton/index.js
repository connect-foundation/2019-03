import React, { useState } from 'react';

import Wrapper from './Wrapper';

const statusInfo = {
  following: {
    value: '팔로잉',
  },
  follow: {
    value: '팔로우',
  },
  requested: {
    value: '요청됨',
  },
};

const FollowingButton = ({ myinfo, targetUser }) => {
  const checkStatus = () => {
    console.log('checkStatus 실행');
    return 'requested';
  };

  const [status, statusState] = useState(checkStatus());
  return (
    <Wrapper>
      <button type="button">{statusInfo[status].value}</button>
    </Wrapper>
  );
};

export default FollowingButton;
