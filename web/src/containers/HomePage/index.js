import React, { useEffect } from 'react';
import Post from './Post';
import PostListWrapper from './PostListWrapper';

import { followingPostListQuery } from './queries';
import { useFetch } from '../../hooks';

const myInfo = {
  username: 'aaaa',
  name: 'aaaaa',
  id: 41,
};

function HomePage() {
  const { state, fetchData } = useFetch();
  const { loading, data, error } = state;

  useEffect(() => {
    fetchData(followingPostListQuery(myInfo.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;

  const { followingPostList: posts } = data;
  return (
    <PostListWrapper>
      {posts.map(p => (
        <Post key={p.id} post={p} myInfo={myInfo} />
      ))}
    </PostListWrapper>
  );
}

export default HomePage;
