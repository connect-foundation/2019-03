import React from 'react';

import PostContentWrapper from './PostContentWrapper';
import PostText from './PostText';
import CommentList from './CommentList';

function PostContent({ post, scrollRef }) {
  return (
    <PostContentWrapper ref={scrollRef}>
      <PostText post={post} />
      <CommentList PostId={post.id} />
    </PostContentWrapper>
  );
}

export default PostContent;
