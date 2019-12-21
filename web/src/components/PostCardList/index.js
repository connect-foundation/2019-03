import React from 'react';

import PostCardLine from './PostCardLine';

const PostCardList = ({ data: { postCard } }) => {
  const postLineListReducer = (accmulator, currentValue, currentIndex) => {
    const lineIndex = Math.floor(currentIndex / 3);
    const isNewLine = lineIndex === currentIndex / 3;
    if (isNewLine) accmulator.push([]);
    accmulator[lineIndex].push(currentValue);
    return accmulator;
  };

  const getLineList = postCards => {
    const postLineList = postCards.reduce(postLineListReducer, []);
    return postLineList;
  };

  const lineList = getLineList(postCard);

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
