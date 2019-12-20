import React, { useState } from 'react';
import UserListModal from '../../../../../components/UserListModal';
import { CountIndicatorWrapper, FollowIndicatorWrapper } from './styles';
import { FOLLOWER_LIST, FOLLOW_LIST } from '../../../../../queries';

const CountIndicator = ({ data, myId }) => {
  const [isFollowerModalVisible, setIsFollowerModalVisible] = useState(false);
  const [isFollowModalVisible, setIsFollowModalVisible] = useState(false);

  const onFollowerClick = async () => {
    setIsFollowerModalVisible(curVisibleState => !curVisibleState);
  };
  const onFollowClick = async () => {
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
          onClick={onFollowerClick}
          listName="팔로워"
          query={FOLLOWER_LIST}
          userId={data.id}
          isVisible={isFollowerModalVisible}
        />
      </li>
      <li>
        <FollowIndicatorWrapper onClick={onFollowClick}>
          팔로우 <span>{data.followsNum}</span>
        </FollowIndicatorWrapper>
        <UserListModal
          myId={myId}
          onClick={onFollowClick}
          listName="팔로우"
          query={FOLLOW_LIST}
          userId={data.id}
          isVisible={isFollowModalVisible}
        />
      </li>
    </CountIndicatorWrapper>
  );
};

export default CountIndicator;
