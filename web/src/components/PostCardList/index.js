import React from 'react';

import PostCardLine from './PostCardLine';

const PostCardList = ({ data }) => {
  const lineList = [];
  const { postCard } = data;
  const postCardLength = postCard.length;
  for (let i = 0; i < postCardLength / 3; i++) {
    const line = [];
    const remainCard =
      i === Math.floor(postCardLength / 3) ? postCardLength % 3 : 3;
    for (let j = 0; j < remainCard; j++) {
      line.push(postCard[i * 3 + j]);
    }
    lineList.push(line);
  }
  return (
    <>
      {lineList.map(postLineInfo => {
        const key = postLineInfo[0].postURL;
        return <PostCardLine postLineInfo={postLineInfo} key={key} />;
      })}
    </>
  );
};

export default PostCardList;
