import React from 'react';

import PostCard from './PostCard';
import PostCardLineWrapper from './PostCardLineWrapper';

const PostCardLine = ({ postLineInfo }) => {
  return (
    <PostCardLineWrapper>
      {postLineInfo.map(postInfo => (
        <PostCard postInfo={postInfo} />
      ))}
    </PostCardLineWrapper>
  );
};

export default PostCardLine;
