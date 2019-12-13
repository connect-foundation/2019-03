import React, { useState, useCallback } from 'react';
import _ from 'underscore';
import { useMutation } from '@apollo/react-hooks';

import Icon from '../../../../components/Icon';
import { CREATE_POST_LIKE, DELETE_POST_LIKE } from '../../../../queries';
import LikeIcon from '../../../../components/LikeIcon';
import LikeInfo from '../../../../components/LikeInfo';
import {
  UtilityBlockWrapper,
  IconList,
  IconWrapper,
  TimePassed,
} from './styles';

function UtilityBlock({ myInfo, post }) {
  const [createPostLike] = useMutation(CREATE_POST_LIKE);
  const [deletePostLike] = useMutation(DELETE_POST_LIKE);

  const { id: postId, isLike, likerInfo } = post;
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
      <TimePassed>1일 전</TimePassed>
    </UtilityBlockWrapper>
  );
}

export default UtilityBlock;
