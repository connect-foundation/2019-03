import React from 'react';

import { CommentWrapper, ProfileWrapper } from './styles';
import ProfileIcon from '../../../../../../components/ProfileIcon';
import Content from './Content';

const Comment = ({ writer, content, likerCount }) => {
  return (
    <CommentWrapper>
      <ProfileWrapper>
        <ProfileIcon />
      </ProfileWrapper>
      <Content content={content} writer={writer} likerCount={likerCount} />
    </CommentWrapper>
  );
};

export default Comment;
