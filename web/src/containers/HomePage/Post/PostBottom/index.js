import React from 'react';

import AllCommentShowText from './AllCommentShowText';
import { Comment, MainText } from '../PostText';
import TimePassed from '../../../../components/TimePassed';

const PostBottom = ({ myInfo, post }) => {
  const {
    writer,
    commentCount,
    commentList,
    postURL,
    content: mainText,
    updatedAt,
  } = post;

  return (
    <>
      <MainText writer={writer} mainText={mainText} />
      <AllCommentShowText postURL={postURL} commentCount={commentCount} />
      {commentList.map(c => (
        <Comment key={c.id} myInfo={myInfo} comment={c} />
      ))}
      <TimePassed updatedAt={updatedAt} />
    </>
  );
};

export default PostBottom;
