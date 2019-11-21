import React from 'react';

import { CommentWrapper, ProfileWrapper, LikeIconWrapper } from './styles';
import ProfileIcon from '../../../../../components/ProfileIcon';
import LikeIcon from '../../../../../components/LikeIcon';
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
