import React, { useState, useCallback, useEffect } from 'react';
import _ from 'underscore';
import { useMutation } from '@apollo/react-hooks';

import { updateDetailPost } from '../../../../utils/LikeHandler';
import Icon from '../../../../components/Icon';
import { CREATE_POST_LIKE, DELETE_POST_LIKE } from '../../../../queries';
import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import TimePassed from '../../../../components/TimePassed';
import { UtilityBlockWrapper, IconList, IconWrapper } from './styles';

function UtilityBlock({ myInfo, post }) {
  const [createPostLike] = useMutation(CREATE_POST_LIKE, {
    update(cache) {
      updateDetailPost({ cache, post, myInfo });
    },
  });
  const [deletePostLike] = useMutation(DELETE_POST_LIKE, {
    update(cache) {
      updateDetailPost({ cache, post, myInfo });
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
    <UtilityBlockWrapper>
      <IconList>
        <IconWrapper>
          <LikeIcon isFull={isLikeClicked} onClick={toggleLikeState} />
        </IconWrapper>
        <IconWrapper>
          <Icon ratio={5} posX={-520} posY={-245} />
        </IconWrapper>
        <IconWrapper>
          <Icon ratio={5} posX={0} posY={-250} />
        </IconWrapper>
      </IconList>
      <LikeInfo
        myInfo={myInfo}
        postId={postId}
        diff={isLikeClicked - isLike}
        likerInfo={likerInfo}
      />
      <TimePassed updatedAt={post.updatedAt} />
    </UtilityBlockWrapper>
  );
}

export default UtilityBlock;
