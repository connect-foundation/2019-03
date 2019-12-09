import React from 'react';

import SideBoxWrapper from './SideBoxWrapper';
import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from './CommentInput';
import UtilityBlock from './UtilityBlock';

function SideBox({ post }) {
  const myInfo = {
    id: 1,
    username: '_so_02',
    name: '정소영',
    profileImage: 'https://i.pravatar.cc/150?img=9',
  };
  return (
    <SideBoxWrapper>
      <PostTop myInfo={myInfo} writer={post.writer} postURL={post.postURL} />
      <PostContent post={post} />
      <UtilityBlock />
      <CommentInput PostId={+post.id} />
    </SideBoxWrapper>
  );
}

export default SideBox;
