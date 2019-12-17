import React, { useRef } from 'react';
import { withCookies } from 'react-cookie';

import SideBoxWrapper from './SideBoxWrapper';
import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from '../../../components/CommentInput';
import UtilityBlock from './UtilityBlock';
import { updateCommentListCacheOfDetailPost } from '../../../cacheUpdater';

function SideBox({ post, cookies }) {
  const myInfo = cookies.get('myInfo');
  const scrollRef = useRef(null);
  return (
    <SideBoxWrapper>
      <PostTop myInfo={myInfo} writer={post.writer} postURL={post.postURL} />
      <PostContent post={post} scrollRef={scrollRef} />
      <UtilityBlock myInfo={myInfo} post={post} />
      <CommentInput
        post={post}
        writer={post.writer}
        scrollRef={scrollRef}
        updateCommentListCache={updateCommentListCacheOfDetailPost}
      />
    </SideBoxWrapper>
  );
}

export default withCookies(SideBox);
