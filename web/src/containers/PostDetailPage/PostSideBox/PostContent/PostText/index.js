import React from 'react';

import { CommentWrapper, ProfileWrapper } from './styles';
import ProfileIcon from '../../../../../components/ProfileIcon';
import Content from './Content';

const Comment = ({ writer, content, updatedAt, commentId }) => {
  return (
    <CommentWrapper>
      <ProfileWrapper>
        <ProfileIcon />
      </ProfileWrapper>
      <Content content={content} writer={writer} />
    </CommentWrapper>
  );
};

export default Comment;
