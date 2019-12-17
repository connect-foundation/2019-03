import React, { useRef } from 'react';
import { withCookies } from 'react-cookie';

import SideBoxWrapper from './SideBoxWrapper';
import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from './CommentInput';
import UtilityBlock from './UtilityBlock';

function SideBox({ post, cookies }) {
  const myInfo = cookies.get('myInfo');
  const scrollRef = useRef(null);
  return (
    <SideBoxWrapper>
      <PostTop myInfo={myInfo} writer={post.writer} postURL={post.postURL} />
      <PostContent post={post} scrollRef={scrollRef} />
      <UtilityBlock myInfo={myInfo} post={post} />
      <CommentInput
        PostId={+post.id}
        writer={post.writer}
        scrollRef={scrollRef}
      />
    </SideBoxWrapper>
  );
}

export default withCookies(SideBox);
