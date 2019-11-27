import React from 'react';

import PostWrapper from './PostWrapper';
import PostTop from '../../../components/PostTop';
import PostMiddle from './PostMiiddle';
import PostBottom from './PostBottom';

const Post = ({ myInfo, post }) => {
  const { writer } = post;

  return (
    <PostWrapper>
      <PostTop myInfo={myInfo} writer={writer} post={post} />
      <PostMiddle myInfo={myInfo} post={post} />
      <PostBottom post={post} />
    </PostWrapper>
  );
};

export default Post;
