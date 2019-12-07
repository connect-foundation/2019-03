import React, { useRef, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import 'intersection-observer';

import Post from './Post';
import PostListWrapper from './PostListWrapper';
import { FOLLOWING_POST_LIST } from './queries';

const myInfo = {
  id: 1,
  username: '_so_02',
  name: '정소영',
  profileImage: 'https://i.pravatar.cc/150?img=9',
};

function HomePage() {
  const lastChild = useRef();

  const { data, loading, error, fetchMore } = useQuery(FOLLOWING_POST_LIST, {
    variables: {
      myId: myInfo.id,
      offset: 0,
      limit: 5,
    },
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });

  const options = {
    root: null,
    threshold: 0,
  };

  const getMorePosts = entries => {
    const lastPost = [...entries].pop();
    if (loading) return;
    if (!lastPost.isIntersecting) return;
    fetchMore({
      variables: {
        offset: data.followingPostList.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          followingPostList: [
            ...prev.followingPostList,
            ...fetchMoreResult.followingPostList,
          ],
        };
      },
    });
  };

  const observer = new IntersectionObserver(getMorePosts, options);

  const { followingPostList } = data || { followingPostList: [] };

  const postList = followingPostList.map(post => (
    <Post key={post.id} post={post} myInfo={myInfo} ref={lastChild} />
  ));

  useEffect(() => {
    if (!lastChild.current) return;
    observer.observe(lastChild.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingPostList]);

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <PostListWrapper>
      {postList}
      <div>loading...</div>
    </PostListWrapper>
  );
}

export default HomePage;
