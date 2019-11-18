import React from 'react';
import SideBox from './Wrapper';

import PostTop from '../PostTop';
import PostContent from './PostContent';
import CommentInput from '../CommentInput';
import ConvenienceBox from './ConvenienceBox';

function PostSideBox({ writer }) {
  return (
    <SideBox>
      <PostTop writer={writer} />
      <PostContent />
      <ConvenienceBox />
      <CommentInput />
    </SideBox>
  );
}

export default PostSideBox;
