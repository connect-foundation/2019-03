/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import _ from 'underscore';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_POST_LIKE, DELETE_POST_LIKE } from '../../../../queries';
import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import {
  CommentIcon,
  IconGroup,
  IconWrapper,
  PostImage,
  PostMiddleWrapper,
} from './styles';

const PostMiddle = ({ myInfo, post }) => {
  const [createPostLike] = useMutation(CREATE_POST_LIKE);
  const [deletePostLike] = useMutation(DELETE_POST_LIKE);

  const { id: postId, isLike, imageURL, postURL, likerInfo } = post;
  const [isLikeClicked, setLikeState] = useState(isLike);

  const likeBtnClickHandler = () => {
    const currentClickStatus = !isLikeClicked;
    if (currentClickStatus)
      createPostLike({ variables: { PostId: postId, UserId: myInfo.id } });
    else deletePostLike({ variables: { PostId: postId, UserId: myInfo.id } });
  };

  const lazyFetch = useCallback(_.debounce(likeBtnClickHandler, 1000), []);

  const toggleLikeState = () => {
    setLikeState(!isLikeClicked);
    if (isLikeClicked !== isLike) return;
    lazyFetch();
  };

  const postImage = useRef(null);
  const wrapperProps = { postImage, userId: myInfo.id, postId };

  useEffect(() => {
    setLikeState(isLike);
  }, [isLike]);

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
        diff={isLikeClicked - isLike}
        likerInfo={likerInfo}
      />
    </PostMiddleWrapper>
  );
};

export default PostMiddle;
