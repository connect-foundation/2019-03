import React from 'react';

import {
  PostBottomWrapper,
  IconGroup,
  IconWrapper,
  ShareIcon,
  Comment,
  CommentWrapper,
  CommentIcon,
  CommentInputWrapper,
  AllCommentShowButton,
  UpdatedTime,
} from './styles';

import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import CommentInput from '../../../../components/CommentInput';

const likeInfoStyle = {
  marginLeft: '6.5px',
  marginTop: '7px',
};

const commentInputStyle = {
  flex: '1 0 auto',
  borderTop: 'none',
  padding: '0 14.5px',
};

const PostBottom = ({ myInfo, likerList, post }) => {
  return (
    <PostBottomWrapper>
      <IconGroup>
        <IconWrapper>
          <LikeIcon ratio={5} />
        </IconWrapper>
        <IconWrapper>
          <CommentIcon post={post} />
        </IconWrapper>
        <IconWrapper>
          <ShareIcon />
        </IconWrapper>
      </IconGroup>
      <LikeInfo myInfo={myInfo} likerList={likerList} style={likeInfoStyle} />
      <CommentWrapper>
        <Comment isPostText />
        <AllCommentShowButton>댓글 모두 16개 보기</AllCommentShowButton>
        <Comment />
        <Comment />
      </CommentWrapper>
      <UpdatedTime>1시간 전</UpdatedTime>
      <CommentInputWrapper>
        <CommentInput style={commentInputStyle} />
      </CommentInputWrapper>
    </PostBottomWrapper>
  );
};

export default PostBottom;
