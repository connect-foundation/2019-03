import React, { useContext } from 'react';
import SideBoxWrapper from './SideBoxWrapper';

import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from '../../../components/CommentInput';
import UtilityBlock from './UtilityBlock';
import PostContext from '../context';

function SideBox() {
  const { state } = useContext(PostContext);
  const myInfo = { username: 'sam' };
  return (
    <SideBoxWrapper>
      <PostTop writer={state.post.writer} myInfo={myInfo} post={state.post} />
      <PostContent />
      <UtilityBlock />
      <CommentInput />
    </SideBoxWrapper>
  );
}

export default SideBox;
