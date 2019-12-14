import React from 'react';

import { CommentWrapper, ProfileWrapper } from './styles';
import ProfileIcon from '../../../../../../components/ProfileIcon';
import Content from './Content';

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <ProfileWrapper>
        <ProfileIcon />
      </ProfileWrapper>
      <Content comment={comment} />
    </CommentWrapper>
  );
};

export default Comment;
