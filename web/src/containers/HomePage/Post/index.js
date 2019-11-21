import React from 'react';

import PostTop from '../../../components/PostTop';
import PostBottom from './PostBottom';
import { PostWrapper, PostImage } from './styles';

const Post = ({ myInfo, writer, post, likerList }) => {
  return (
    <PostWrapper>
      <PostTop myInfo={myInfo} writer={writer} post={post} />
      <PostImage imgSrc={post.imgSrc} />
      <PostBottom myInfo={myInfo} post={post} likerList={likerList} />
    </PostWrapper>
  );
};

Post.defaultProps = {
  myInfo: {
    username: 'test1',
  },
  writer: {
    username: 'test2',
    isFollow: true,
  },
  post: {
    imgSrc:
      'http://image.chosun.com/sitedata/image/201705/11/2017051101043_0.jpg',
    postHash: 'aaaaa',
  },
  likerList: [
    {
      username: 'test1',
      name: 'aaaa',
    },
    {
      username: 'test2',
      name: 'bbbb',
    },
    {
      username: 'test3',
      name: 'cccc',
    },
    {
      username: 'test4',
      name: 'dddd',
    },
  ],
};

export default Post;
