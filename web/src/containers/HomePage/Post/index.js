import React, { useRef } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import _ from 'underscore';

import { READ_POST } from '../../../queries';
import PostWrapper from './PostWrapper';
import PostTop from '../../../components/PostTop';
import PostMiddle from './PostMiddle';
import PostBottom from './PostBottom';
import CommentInput from '../../../components/CommentInput';
import { updateCommentListCacheOfPostList } from '../../../cacheUpdater';

const Post = ({ myInfo, post }) => {
  const { writer, postURL } = post;
  const [prefetch] = useLazyQuery(READ_POST);
  const currentFocusingPost = useRef(null);

  const mouseEnterHandler = () => {
    currentFocusingPost.current = { post, enteredTime: new Date() };
  };
  const checkFocusedTime = () => {
    if (!currentFocusingPost.current) return;
    if (new Date() - currentFocusingPost.current.enteredTime < 2000) return;
    currentFocusingPost.current = null;

    prefetch({ variables: { postURL: post.postURL, UserId: myInfo.id } });
  };
  const mouseMoveHandler = _.throttle(checkFocusedTime, 100);

  const mouseLeaveHandler = () => {
    currentFocusingPost.current = null;
  };

  return (
    <PostWrapper
      onMouseEnter={mouseEnterHandler}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <PostTop myInfo={myInfo} writer={writer} postURL={postURL} />
      <PostMiddle myInfo={myInfo} post={post} />
      <PostBottom myInfo={myInfo} post={post} />
      <CommentInput
        post={post}
        writer={writer}
        updateCommentListCache={updateCommentListCacheOfPostList}
      />
    </PostWrapper>
  );
};

export default Post;
