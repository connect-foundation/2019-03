import React from 'react';

import Wrapper, { ViewPort } from './Wrapper';

import PostSideBox from '../../components/PostSideBox';

function PostDetailPage() {
  const postImg = new Image();
  const writer = { username: 'jack', isFollow: true };
  const myInfo = { username: 'sam' };
  const post = { postHash: 'goddamn' };
  postImg.src =
    'http://image.chosun.com/sitedata/image/201705/11/2017051101043_0.jpg';
  return (
    <Wrapper>
      <ViewPort img={postImg} />
      <PostSideBox writer={writer} myInfo={myInfo} post={post} />
    </Wrapper>
  );
}

export default PostDetailPage;
