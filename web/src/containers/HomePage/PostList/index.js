import React from 'react';

import Post from '../Post';
import PostListWrapper from './PostListWrapper';

const PostList = () => {
  return (
    <PostListWrapper>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostListWrapper>
  );
};

export default PostList;
