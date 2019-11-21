import React from 'react';

import { CommentWrapper, ProfileWrapper, LikeIconWrapper } from './styles';
import ProfileIcon from '../ProfileIcon';
import LikeIcon from '../LikeIcon';
import Content from './Content';

const Comment = ({ user, content, updatedAt, likerCount, commentId }) => {
  return (
    <CommentWrapper>
      <ProfileWrapper>
        <ProfileIcon />
      </ProfileWrapper>
      <Content content={content} user={user} likerCount={likerCount} />
      <LikeIconWrapper>
        <LikeIcon ratio={10} />
      </LikeIconWrapper>
    </CommentWrapper>
  );
};

export default Comment;
