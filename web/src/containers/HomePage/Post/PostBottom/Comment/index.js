import React from 'react';

import {
  CommentContent,
  CommentMoreButton,
  CommentWrapper,
  Commenter,
} from './styles';
import LikeIcon from '../../../../../components/LikeIcon';

const Comment = ({ isPostText }) => {
  return (
    <CommentWrapper isPostText={isPostText}>
      <Commenter>Test</Commenter>
      <CommentContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempore
        libero similique, cupiditate explicabo, natus perferendis maxime aliquam
        corrupti eveniet rerum nobis doloremque? Soluta dolorum fugit inventore
        impedit, optio veritatis?
      </CommentContent>
      <CommentMoreButton>더 보기</CommentMoreButton>
      {isPostText || <LikeIcon ratio={10} />}
    </CommentWrapper>
  );
};

Comment.defaultProps = {
  isPostText: false,
};

export default Comment;
