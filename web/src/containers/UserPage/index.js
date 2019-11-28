import React from 'react';

import PostCardList from '../../components/PostCardList';
import UserPageInfo from './UserPageInfo';
import ListSelector from './ListSelector';
import { UserPageWrapper, UserPageSection } from './styles';

const index = ({ match }) => {
  const { username } = match.params;
  return (
    <UserPageWrapper>
      <UserPageSection>
        <UserPageInfo username={username} />
        <ListSelector username={username} />
        <PostCardList />
      </UserPageSection>
    </UserPageWrapper>
  );
};

export default index;
