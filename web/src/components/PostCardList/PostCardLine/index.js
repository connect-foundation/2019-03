import React from 'react';

import PostCard from './PostCard';
import PostCardLineWrapper from './PostCardLineWrapper';

const PostCardLine = () => {
  return (
    <PostCardLineWrapper>
      <PostCard />
      <PostCard />
      <PostCard isLast />
    </PostCardLineWrapper>
  );
};

export default PostCardLine;
