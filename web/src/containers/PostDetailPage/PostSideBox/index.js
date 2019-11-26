import React, { useContext } from 'react';
import SideBoxWrapper from './SideBoxWrapper';

import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from '../../../components/CommentInput';
import UtilityBlock from './UtilityBlock';
import PostContext from '../context';

function SideBox() {
  const { data } = useContext(PostContext);
  const myInfo = { username: 'sam' };
  return (
    <SideBoxWrapper>
      <PostTop writer={data.post.writer} myInfo={myInfo} post={data.post} />
      <PostContent />
      <UtilityBlock />
      <CommentInput />
    </SideBoxWrapper>
  );
}

export default SideBox;
