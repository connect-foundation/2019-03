import React from 'react';
import PostList from './PostList';

import { followingPostListQuery } from './queries';
import useFetch from '../../useFetch';

const myInfo = {
  username: 'aaaa',
  name: 'aaaaa',
  id: 41,
};

function HomePage() {
  const [state, dispatch] = useFetch(followingPostListQuery(41));
  const { loading, data, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  const { followingPostList } = data;

  return <PostList postList={followingPostList} myInfo={myInfo} />;
}

export default HomePage;
