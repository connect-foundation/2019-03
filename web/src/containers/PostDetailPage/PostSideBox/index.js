import React from 'react';
import SideBoxWrapper from './SideBoxWrapper';

import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from '../../../components/CommentInput';
import ConvenienceBox from './UtilityBlock';

function SideBox({ writer, myInfo, post }) {
  return (
    <SideBoxWrapper>
      <PostTop writer={writer} myInfo={myInfo} post={post} />
      <PostContent />
      <ConvenienceBox />
      <CommentInput />
    </SideBoxWrapper>
  );
}

export default SideBox;
