import React from 'react';

import Wrapper from './Wrapper';
import PostText from '../PostText';
import CommentList from '../CommentList';

function PostContent({ height }) {
  const postContentTop = {
    user: {
      username: 'qkqhro',
      profileURL: null,
    },
    content: ' 소식이 뜸했네요. 털을 깎았습니다.',
    updatedAt: null,
  };
  return (
    <Wrapper height={height}>
      <PostText {...postContentTop} />
      <CommentList />
    </Wrapper>
  );
}

export default PostContent;
