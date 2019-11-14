import React from 'react';

import Wrapper, { ViewPort, SideBox } from './Wrapper';

import PostTop from '../../components/PostTop';

function PostDetailPage() {
  const postImg = new Image();
  const writer = { username: 'jack' };
  postImg.src =
    'http://image.chosun.com/sitedata/image/201705/11/2017051101043_0.jpg';
  return (
    <Wrapper>
      <ViewPort img={postImg} />
      <SideBox>
        <PostTop writer={writer} />
      </SideBox>
    </Wrapper>
  );
}

export default PostDetailPage;
