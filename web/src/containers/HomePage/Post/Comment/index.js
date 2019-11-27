import React from 'react';

import {
  CommentContent,
  CommentMoreButton,
  CommentWrapper,
  Commenter,
} from './styles';
import LikeIcon from '../../../../components/LikeIcon';
import useComment from './hooks/useComment';
import { LikeProvider } from '../../../../components/LikeIcon/Context/LikeContext';

const likeIconStyle = {
  marginTop: '2px',
  marginLeft: 'auto',
  alignSelf: 'flex-start',
};

const Comment = ({ isMainText, commenter, children }) => {
  const [isFold, commentRef, onUnfoldComment] = useComment();

  return (
    <CommentWrapper>
      <Commenter to={`/${commenter}`}>{commenter}</Commenter>
      <CommentContent isFold={isFold} ref={commentRef}>
        {children}
      </CommentContent>
      <CommentMoreButton onClick={onUnfoldComment} isFold={isFold}>
        더 보기
      </CommentMoreButton>
      {isMainText || (
        <LikeProvider>
          <LikeIcon ratio={10} style={likeIconStyle} />
        </LikeProvider>
      )}
    </CommentWrapper>
  );
};

Comment.defaultProps = {
  isMainText: false,
  commenter: 'Test',
};

export default Comment;
