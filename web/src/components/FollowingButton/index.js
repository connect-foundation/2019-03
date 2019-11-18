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
    const status = 'requested';
    // 팔로우 상태를 확인하는 로직
    return status;
  };

  const [status, statusState] = useState(checkStatus());
  return (
    <Wrapper>
      <button type="button">{statusInfo[status].value}</button>
    </Wrapper>
  );
};

export default FollowingButton;
