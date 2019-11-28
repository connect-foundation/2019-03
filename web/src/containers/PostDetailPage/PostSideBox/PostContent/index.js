import React from 'react';

import PostContentWrapper from './PostContentWrapper';
import PostText from './PostText';
import CommentList from './CommentList';

function PostContent({ height }) {
  return (
    <PostContentWrapper height={height}>
      <PostText />
      <CommentList />
    </PostContentWrapper>
  );
}

export default PostContent;
