import React from 'react';

import {
  AllCommentShowText,
  Comment,
  CommentInputWrapper,
  UpdatedTime,
} from './styles';
import CommentInput from '../../../../components/CommentInput';
import { getDateDiffText } from '../../../../utils';

const commentInputStyle = {
  flex: '1 0 auto',
  borderTop: 'none',
  padding: '0 14.5px',
};

const PostBottom = ({ post }) => {
  const {
    writer,
    commentCount,
    commentList,
    postURL,
    content: mainText,
    updatedAt,
  } = post;
  const dateDiffText = getDateDiffText(+updatedAt, new Date());

  return (
    <>
      <Comment commenter={writer.username} isMainText>
        {mainText}
      </Comment>
      <AllCommentShowText postURL={postURL} commentCount={commentCount} />
      {commentList.map(c => (
        <Comment key={c.id} commenter={c.writer.username}>
          {c.content}
        </Comment>
      ))}
      <UpdatedTime>{dateDiffText}</UpdatedTime>
      <CommentInputWrapper>
        <CommentInput style={commentInputStyle} post={post} />
      </CommentInputWrapper>
    </>
  );
};

export default PostBottom;
