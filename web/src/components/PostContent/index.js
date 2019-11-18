import React from 'react';

import Wrapper from './Wrapper';
import Comment from '../Comment';
import CommentList from '../CommentList';

function PostContent({ height }) {
  const postContentTop = {
    user: {
      username: 'qkqhro',
      profileURL: null,
    },
    content: ' 소식이 뜸했네요. 털을 깎았습니다.',
    updatedAt: null,
    likers: 32,
    commentId: 111,
  };
  return (
    <Wrapper height={height}>
      <Comment {...postContentTop} />
      <CommentList />
    </Wrapper>
  );
}

export default PostContent;
