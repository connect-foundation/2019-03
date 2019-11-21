import React from 'react';

import { CommentWrapper, ProfileWrapper } from './styles';
import ProfileIcon from '../../../../../components/ProfileIcon';
import Content from './Content';

const Comment = ({ user, content, updatedAt, likerCount, commentId }) => {
  return (
    <CommentWrapper>
      <ProfileWrapper>
        <ProfileIcon />
      </ProfileWrapper>
      <Content content={content} user={user} likerCount={likerCount} />
    </CommentWrapper>
  );
};

export default Comment;
