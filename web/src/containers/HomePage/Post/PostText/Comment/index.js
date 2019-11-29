/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';

import {
  Content as CommentContent,
  TextMoreButton as CommentMoreButton,
  Writer as Commenter,
} from '../styles';
import CommentWrapper from './CommentWrapper';
import { useText as useComment } from '../hooks';
import LikeIcon from '../../../../../components/LikeIcon';
import { LikeProvider } from '../../../../../components/LikeIcon/Context/LikeContext';

const likeIconStyle = {
  marginTop: '2px',
  marginLeft: 'auto',
  alignSelf: 'flex-start',
};

const Comment = ({ myInfo, comment }) => {
  const [isFold, commentRef, onUnfoldComment] = useComment();
  const likeIcon = useRef(null);

  const { isLike, id: commentId, writer: commenter, content } = comment;
  const wrapperProps = { userId: myInfo.id, commentId, likeIcon };

  return (
    <LikeProvider isLike={isLike}>
      <CommentWrapper {...wrapperProps}>
        <Commenter to={`/${commenter.username}`}>
          {commenter.username}
        </Commenter>
        <CommentContent isFold={isFold} ref={commentRef}>
          {content}
        </CommentContent>
        <CommentMoreButton onClick={onUnfoldComment} isFold={isFold}>
          더 보기
        </CommentMoreButton>
        <LikeIcon ratio={10} style={likeIconStyle} ref={likeIcon} />
      </CommentWrapper>
    </LikeProvider>
  );
};

export default Comment;
