import React from 'react';

import PostContentWrapper from './PostContentWrapper';
import PostText from './PostText';
import CommentList from '../CommentList';

function PostContent({ height }) {
  const postContentTop = {
    user: {
      username: 'queen',
      profileURL: null,
    },
    content: '올 겨울 신상',
    updatedAt: null,
  };
  return (
    <PostContentWrapper height={height}>
      <PostText {...postContentTop} />
      <CommentList />
    </PostContentWrapper>
  );
}

export default PostContent;
