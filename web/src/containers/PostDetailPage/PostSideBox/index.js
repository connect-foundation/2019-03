import React, { useContext, useRef } from 'react';

import SideBoxWrapper from './SideBoxWrapper';
import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from './CommentInput';
import UtilityBlock from './UtilityBlock';
import UserContext from '../../App/UserContext';

function SideBox({ post }) {
  const { myInfo } = useContext(UserContext);
  const scrollRef = useRef(null);
  return (
    <SideBoxWrapper>
      <PostTop myInfo={myInfo} writer={post.writer} postURL={post.postURL} />
      <PostContent post={post} scrollRef={scrollRef} />
      <UtilityBlock myInfo={myInfo} post={post} />
      <CommentInput PostId={+post.id} scrollRef={scrollRef} />
    </SideBoxWrapper>
  );
}

export default SideBox;
