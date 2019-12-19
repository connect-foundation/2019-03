import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import UserListModal from '../../../../../components/UserListModal';
import { CountIndicatorWrapper, FollowIndicatorWrapper } from './styles';
import { FOLLOWER_LIST, FOLLOW_LIST } from '../../../../../queries';

const CountIndicator = ({ data, myId }) => {
  const lazyQueryOption = {
    variables: { myId, userId: data.id },
    fetchPolicy: 'cache-and-network',
  };
  const [loadFollowerList, followerResult] = useLazyQuery(
    FOLLOWER_LIST,
    lazyQueryOption,
  );
  const [loadFollowList, followResult] = useLazyQuery(
    FOLLOW_LIST,
    lazyQueryOption,
  );

  const [isFollowerModalVisible, setIsFollowerModalVisible] = useState(false);
  const [isFollowModalVisible, setIsFollowModalVisible] = useState(false);

  const onFollowerClick = async () => {
    await loadFollowerList();
    setIsFollowerModalVisible(curVisibleState => !curVisibleState);
  };
  const onFollowClick = async () => {
    await loadFollowList();
    setIsFollowModalVisible(curVisibleState => !curVisibleState);
  };

  return (
    <CountIndicatorWrapper>
      <li>
        <span>
          게시물 <span>{data.postNumber}</span>
        </span>
      </li>
      <li>
        <FollowIndicatorWrapper onClick={onFollowerClick}>
          팔로워 <span>{data.followersNum}</span>
        </FollowIndicatorWrapper>
        <UserListModal
          myId={myId}
          isVisible={isFollowerModalVisible}
          onClick={onFollowerClick}
          lazyQueryResult={followerResult}
          listName="팔로워"
        />
      </li>
      <li>
        <FollowIndicatorWrapper onClick={onFollowClick}>
          팔로우 <span>{data.followsNum}</span>
        </FollowIndicatorWrapper>
        <UserListModal
          myId={myId}
          isVisible={isFollowModalVisible}
          onClick={onFollowClick}
          lazyQueryResult={followResult}
          listName="팔로우"
        />
      </li>
    </CountIndicatorWrapper>
  );
};

export default CountIndicator;
