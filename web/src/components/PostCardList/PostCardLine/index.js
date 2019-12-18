import React from 'react';

import PostCard from './PostCard';
import PostCardLineWrapper from './PostCardLineWrapper';

const PostCardLine = ({ postLineInfo }) => {
  return (
    <PostCardLineWrapper>
      {postLineInfo.map(postInfo => {
        const key = postInfo.postURL;
        return <PostCard postInfo={postInfo} key={key} />;
      })}
    </PostCardLineWrapper>
  );
};

export default PostCardLine;
