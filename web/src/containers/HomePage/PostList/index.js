import React from 'react';

import Post from '../Post';
import PostListWrapper from './PostListWrapper';

const PostList = ({ myInfo, postList }) => {
  return (
    <PostListWrapper>
      {postList.map(p => (
        <Post key={p.id} post={p} myInfo={myInfo} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
