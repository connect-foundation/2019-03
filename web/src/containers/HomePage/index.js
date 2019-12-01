import React, { useEffect, useRef } from 'react';
import Post from './Post';
import PostListWrapper from './PostListWrapper';

import { followingPostListQuery } from './queries';
import { infiniteScroll } from '../../utils';
import { useFetch } from '../../hooks';
import reducer from './reducer';

const myInfo = {
  id: 1,
  username: '_so_02',
  name: '정소영',
  profileImage: 'https://i.pravatar.cc/150?img=9',
};

const LIMIT = 10;

function HomePage() {
  const loading = useRef(false);
  const offset = useRef(0);
  const { state, dispatch, fetchData } = useFetch(reducer);
  const { data, error } = state;

  const refetchData = () => {
    if (data && data.isEnd) return;
    if (loading.current) return;
    fetchData(followingPostListQuery(myInfo.id, offset.current, LIMIT));
    offset.current += LIMIT;
    loading.current = true;
  };

  useEffect(() => {
    fetchData(followingPostListQuery(myInfo.id, 0, LIMIT));
    offset.current += LIMIT;
    loading.current = true;
    window.addEventListener(
      'scroll',
      infiniteScroll.bind(null, refetchData),
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <div>에러가 발생했습니다</div>;

  let postList = null;
  if (data) {
    const { followingPostList } = data;
    postList = followingPostList.map(p => (
      <Post key={p.id} post={p} myInfo={myInfo} dispatch={dispatch} />
    ));
    loading.current = false;
  }

  return (
    <PostListWrapper>
      {postList}
      {loading.current && <div>로딩중...</div>}
    </PostListWrapper>
  );
}

export default HomePage;
