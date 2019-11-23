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
  AllCommentShowText,
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
  const commentCount = 16;
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
        <Comment isPostText>테스트</Comment>
        <AllCommentShowText post={post} commentCount={commentCount} />
        <Comment>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          tempore libero similique, cupiditate explicabo, natus perferendis
          maxime aliquam corrupti eveniet rerum nobis doloremque? Soluta dolorum
          fugit inventore impedit, optio veritatis?
        </Comment>
      </CommentWrapper>
      <UpdatedTime>1시간 전</UpdatedTime>
      <CommentInputWrapper>
        <CommentInput style={commentInputStyle} />
      </CommentInputWrapper>
    </PostBottomWrapper>
  );
};

export default PostBottom;
