import React from 'react';

import { AllCommentShowText, CommentInputWrapper, UpdatedTime } from './styles';
import { Comment, MainText } from '../PostText';
import CommentInput from '../../../../components/CommentInput';
import { getDateDiffText } from '../../../../utils';

const commentInputStyle = {
  flex: '1 0 auto',
  borderTop: 'none',
  padding: '0 14.5px',
};

const PostBottom = ({ myInfo, post, dispatch }) => {
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
      <MainText writer={writer} mainText={mainText} />
      <AllCommentShowText postURL={postURL} commentCount={commentCount} />
      {commentList.map(c => (
        <Comment key={c.id} myInfo={myInfo} comment={c} />
      ))}
      <UpdatedTime>{dateDiffText}</UpdatedTime>
      <CommentInputWrapper>
        {/* <CommentInput
          style={commentInputStyle}
          post={post}
          dispatch={dispatch}
        /> */}
      </CommentInputWrapper>
    </>
  );
};

export default PostBottom;
