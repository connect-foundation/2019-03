import React, { useState, useCallback, useEffect } from 'react';
import _ from 'underscore';
import { useMutation } from '@apollo/react-hooks';

import { updateLikeCacheOfDetailPost } from '../../../../cacheUpdater';
import Icon from '../../../../components/Icon';
import { CREATE_POST_LIKE, DELETE_POST_LIKE } from '../../../../queries';
import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import TimePassed from '../../../../components/TimePassed';
import { IconGroupWrapper, IconList, IconWrapper } from './styles';

function IconGroup({ myInfo, post, commentRef }) {
  const [createPostLike] = useMutation(CREATE_POST_LIKE, {
    update(cache) {
      updateLikeCacheOfDetailPost({ cache, post, myInfo });
    },
  });
  const [deletePostLike] = useMutation(DELETE_POST_LIKE, {
    update(cache) {
      updateLikeCacheOfDetailPost({ cache, post, myInfo });
    },
  });

  const { id: postId, isLike, likerInfo, writer } = post;
  const [isLikeClicked, setLikeState] = useState(isLike);

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

  useEffect(() => {
    setLikeState(isLike);
  }, [isLike]);

  return (
    <IconGroupWrapper>
      <IconList>
        <IconWrapper>
          <LikeIcon isFull={isLikeClicked} onClick={toggleLikeState} />
        </IconWrapper>
        <IconWrapper onClick={() => commentRef.current.focus()}>
          <Icon name="comment" />
        </IconWrapper>
      </IconList>
      <LikeInfo
        myInfo={myInfo}
        post={post}
        diff={isLikeClicked - isLike}
        likerInfo={likerInfo}
      />
      <TimePassed updatedAt={post.updatedAt} />
    </IconGroupWrapper>
  );
}

export default IconGroup;
