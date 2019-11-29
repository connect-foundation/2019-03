import React from 'react';

import { TextWrapper } from '../styles';
import { useLikeState } from '../../../../../components/LikeIcon/Context/LikeContext';
import { useFetch } from '../../../../../hooks';
import {
  deleteCommentLike,
  createCommentLike,
} from '../../../../../components/LikeIcon/queries';

const isLikeIcon = (target, likeIcon) => target === likeIcon;

const CommentWrapper = ({ userId, commentId, likeIcon, children }) => {
  const { fetchData } = useFetch();
  const isLike = useLikeState();

  const onClick = ({ target }) => {
    if (!likeIcon || !isLikeIcon(target, likeIcon.current)) {
      return;
    }

    const query = isLike
      ? deleteCommentLike(commentId, userId)
      : createCommentLike(commentId, userId);
    fetchData(query);
  };

  return <TextWrapper onClick={onClick}>{children}</TextWrapper>;
};

export default CommentWrapper;
