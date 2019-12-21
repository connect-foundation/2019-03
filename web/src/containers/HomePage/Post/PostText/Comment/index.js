/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';

import {
  Content as CommentContent,
  TextMoreButton as CommentMoreButton,
  Writer as Commenter,
} from '../styles';
import CommentWrapper from './CommentWrapper';
import { useText as useComment } from '../hooks';
import { convertPlainTextToLinkedText } from '../../../../../lib';

const Comment = ({ myInfo, comment }) => {
  const [isFold, commentRef, onUnfoldComment] = useComment();
  const likeIcon = useRef(null);

  const { id: commentId, writer: commenter, content } = comment;
  const wrapperProps = { userId: myInfo.id, commentId, likeIcon };

  return (
    <CommentWrapper {...wrapperProps}>
      <Commenter to={`/${commenter.username}`}>{commenter.username}</Commenter>
      <CommentContent isFold={isFold} ref={commentRef}>
        {convertPlainTextToLinkedText(content)}
      </CommentContent>
      <CommentMoreButton onClick={onUnfoldComment} isFold={isFold}>
        더 보기
      </CommentMoreButton>
    </CommentWrapper>
  );
};

export default Comment;
