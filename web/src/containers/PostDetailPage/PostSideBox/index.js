import React from 'react';

import SideBoxWrapper from './SideBoxWrapper';
import PostTop from '../../../components/PostTop';
import PostContent from './PostContent';
import CommentInput from '../../../components/CommentInput';
import UtilityBlock from './UtilityBlock';
import { ADD_COMMENT, COMMENT_LIST, commentListVariables } from '../queries';

function SideBox({ post }) {
  const myInfo = {
    id: 1,
    username: '_so_02',
    name: '정소영',
    profileImage: 'https://i.pravatar.cc/150?img=9',
  };
  return (
    <SideBoxWrapper>
      <PostTop writer={post.writer} myInfo={myInfo} post={post} />
      <PostContent post={post} />
      <UtilityBlock />
      <CommentInput
        PostId={+post.id}
        ADD_COMMENT={ADD_COMMENT}
        COMMENT_LIST={COMMENT_LIST}
        variables={commentListVariables}
      />
    </SideBoxWrapper>
  );
}

export default SideBox;
