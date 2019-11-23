import React from 'react';

import {
  CommentContent,
  CommentMoreButton,
  CommentWrapper,
  Commenter,
} from './styles';
import LikeIcon from '../../../../../components/LikeIcon';
import useComment from './useComment';

const likcIconStyle = {
  alignSelf: 'flex-start',
};

const Comment = ({ isPostText, children }) => {
  const [isFold, comment, onUnfoldComment] = useComment();

  return (
    <CommentWrapper isPostText={isPostText}>
      <Commenter>Test</Commenter>
      <CommentContent isFold={isFold} ref={comment}>
        {children}
      </CommentContent>
      <CommentMoreButton onClick={onUnfoldComment} isFold={isFold}>
        더 보기
      </CommentMoreButton>
      {isPostText || <LikeIcon ratio={10} style={likcIconStyle} />}
    </CommentWrapper>
  );
};

Comment.defaultProps = {
  isPostText: false,
};

export default Comment;
