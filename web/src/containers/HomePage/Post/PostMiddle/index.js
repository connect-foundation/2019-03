/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback, useEffect } from 'react';
import _ from 'underscore';
import { useMutation } from '@apollo/react-hooks';

import { updateLikeCacheOfPostList } from '../../../../cacheUpdater';
import { CREATE_POST_LIKE, DELETE_POST_LIKE } from '../../../../queries';
import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import PostImage from '../../../../components/PostImage';
import CommentIcon from './CommentIcon';
import PostMiddleWrapper from './PostMiddleWrapper';
import { IconGroup, IconWrapper } from './styles';

const PostMiddle = ({ myInfo, post }) => {
  const [createPostLike] = useMutation(CREATE_POST_LIKE, {
    update(cache, { data: { createPostLike: targetId } }) {
      updateLikeCacheOfPostList({ cache, targetId, myInfo });
    },
  });
  const [deletePostLike] = useMutation(DELETE_POST_LIKE, {
    update(cache, { data: { deletePostLike: targetId } }) {
      updateLikeCacheOfPostList({ cache, targetId, myInfo });
    },
  });

  const { id: postId, isLike, imageURL, postURL, likerInfo, writer } = post;
  const [isLikeClicked, setLikeState] = useState();
  const likeBtnClickHandler = likeState => {
    if (!likeState)
      createPostLike({
        variables: { PostId: postId, WriterId: writer.id, UserId: myInfo.id },
      });
    else
      deletePostLike({
        variables: { PostId: postId, UserId: myInfo.id },
      });
  };

  const lazyFetch = useCallback(_.debounce(likeBtnClickHandler, 700), []);

  const toggleLikeState = () => {
    setLikeState(!isLikeClicked);
    if (isLikeClicked !== isLike) return;
    lazyFetch(isLikeClicked);
  };

  const wrapperProps = { userId: myInfo.id, postId };

  useEffect(() => {
    setLikeState(isLike);
  }, [isLike]);

  return (
    <PostMiddleWrapper {...wrapperProps}>
      <PostImage
        myInfo={myInfo}
        imageURL={imageURL}
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
        post={post}
        diff={isLikeClicked - isLike}
        likerInfo={likerInfo}
      />
    </PostMiddleWrapper>
  );
};

export default PostMiddle;
