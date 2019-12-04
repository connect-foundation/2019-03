import React from 'react';

import { AllCommentShowText, UpdatedTime } from './styles';
import { Comment, MainText } from '../PostText';
import { getDateDiffText } from '../../../../utils';

const PostBottom = ({ myInfo, post }) => {
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
    </>
  );
};

export default PostBottom;
