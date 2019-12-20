import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import UserListItem from '../../../components/UserListModal/UserListItem';
import AnnouncementMessage from '../../../components/AnnouncementMessage';
import Loading from '../../../components/Loading';
import { ModalHeader } from '../../../components/UserListModal/styles';
import {
  NoFollowingWrapper,
  StyledModalWrapper,
  StyledModalContent,
} from './styles';

import randomList from '../../../queries/randomList';

function NoFollowing() {
  const { data, error, loading } = useQuery(randomList);
  const getContent = userList => {
    const content = userList.map(user => {
      const updatedInfo = { ...user, isFollow: null };
      return <UserListItem userInfo={updatedInfo} key={updatedInfo.id} />;
    });
    return content;
  };

  if (loading) return <Loading />;
  return (
    <NoFollowingWrapper>
      <AnnouncementMessage>아직 팔로우가 없어요!</AnnouncementMessage>
      <StyledModalWrapper>
        <ModalHeader>
          <h1>친구를 추가해서 함께 즐겨보아요!</h1>
        </ModalHeader>
        <StyledModalContent>{getContent(data.randomList)}</StyledModalContent>
      </StyledModalWrapper>
    </NoFollowingWrapper>
  );
}

export default NoFollowing;
