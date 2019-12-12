/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useCallback } from 'react';
import _ from 'underscore';

import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import {
  CommentIcon,
  IconGroup,
  IconWrapper,
  PostImage,
  PostMiddleWrapper,
} from './styles';

const likeInfoStyle = {
  margin: '4px 15px',
};

const PostMiddle = ({ myInfo, post }) => {
  const { id: postId, isLike, imageURL, postURL, likerInfo } = post;

  const [isLikeClicked, setLikeState] = useState(isLike);

  const likeBtnClickHandler = () => {
    // isLikeClicked 
    // true면 만들고
    // false면 제거

  };

  const lazyFetch = useCallback(_.debounce(likeBtnClickHandler, 300), []);

  const toggleLikeState = () => {
    setLikeState(!isLikeClicked);
    if (isLikeClicked === isLike) return;
    lazyFetch();
  };

  const postImage = useRef(null);
  const wrapperProps = { postImage, userId: myInfo.id, postId };

  return (
    <PostMiddleWrapper {...wrapperProps}>
      <PostImage
        myInfo={myInfo}
        imageURL={imageURL}
        ref={postImage}
        onDoubleClick={toggleLikeState}
      />
      <IconGroup>
        <IconWrapper>
          <LikeIcon isFull={isLikeClicked} onClick={toggleLikeState} />
        </IconWrapper>
        <IconWrapper>
          <CommentIcon postURL={postURL} />
        </IconWrapper>
      </IconGroup>
      <LikeInfo
        myInfo={myInfo}
        postId={postId}
        style={likeInfoStyle}
        diff={isLikeClicked - isLike}
        likerInfo={likerInfo}
      />
    </PostMiddleWrapper>
  );
};

export default PostMiddle;
