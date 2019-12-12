/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useCallback } from 'react';
import _ from 'underscore';

import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import { LikerInfoProvider } from '../../../../components/LikeInfo/Context/LikerInfoContext';
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

  const likeBtnClickHandler = () => {};

  const lazyFetch = useCallback(_.debounce(likeBtnClickHandler, 300), []);

  const toggleLikeState = () => {
    setLikeState(!isLikeClicked);
    if (isLikeClicked === isLike) return;
    lazyFetch();
  };

  const postImage = useRef(null);
  const wrapperProps = { postImage, userId: myInfo.id, postId };

  return (
    <LikerInfoProvider likerInfo={likerInfo}>
      <PostMiddleWrapper {...wrapperProps}>
        <PostImage myInfo={myInfo} imageURL={imageURL} ref={postImage} />
        <IconGroup>
          <IconWrapper>
            <LikeIcon isFull={isLikeClicked} onClick={toggleLikeState} />
          </IconWrapper>
          <IconWrapper>
            <CommentIcon postURL={postURL} />
          </IconWrapper>
        </IconGroup>
        <LikeInfo myInfo={myInfo} postId={postId} style={likeInfoStyle} />
      </PostMiddleWrapper>
    </LikerInfoProvider>
  );
};

export default PostMiddle;
