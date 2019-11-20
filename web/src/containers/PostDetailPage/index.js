import React from 'react';

import { PostDetailPageWrapper, ViewPort } from './styles';

import PostSideBox from './PostSideBox';

function PostDetailPage() {
  const postImg = new Image();
  const writer = { username: 'queen', isFollow: true, profileURL: 'queen.jpg' };
  const myInfo = { username: 'sam' };
  const post = {
    postHash: 'goddamn',
    scr: 'http://image.chosun.com/sitedata/image/201705/11/2017051101043_0.jpg',
  };
  postImg.src = post.scr;
  return (
    <PostDetailPageWrapper>
      <ViewPort img={postImg} />
      <PostSideBox writer={writer} myInfo={myInfo} post={post} />
    </PostDetailPageWrapper>
  );
}

export default PostDetailPage;
