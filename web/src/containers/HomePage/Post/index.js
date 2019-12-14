import React from 'react';

import PostWrapper from './PostWrapper';
import PostTop from '../../../components/PostTop';
import PostMiddle from './PostMiddle';
import PostBottom from './PostBottom';
import CommentInput from './CommentInput';

const Post = React.forwardRef(({ myInfo, post }, ref) => {
  const { writer, postURL } = post;

  return (
    <PostWrapper ref={ref}>
      <PostTop myInfo={myInfo} writer={writer} postURL={postURL} />
      <PostMiddle myInfo={myInfo} post={post} />
      <PostBottom myInfo={myInfo} post={post} />
      <CommentInput PostId={+post.id} />
    </PostWrapper>
  );
});

export default Post;
