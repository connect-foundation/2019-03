import React, { useRef, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import 'intersection-observer';

import Post from './Post';
import { PostListWrapper, SpinnerWrapper } from './styles';
import { FOLLOWING_POST_LIST } from './queries';
import Spinner from '../../components/Spinner';

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
      limit: 5,
    },
    fetchPolicy: 'cache-and-network',
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

    const list = data.followingPostList;
    const cursor = list.length ? [...list].pop().updatedAt : null;

    fetchMore({
      variables: {
        cursor,
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

  const { followingPostList } = data || { followingPostList: [] };

  const postList = followingPostList.map(post => (
    <Post key={post.id} post={post} myInfo={myInfo} />
  ));

  useEffect(() => {
    if (!lastChild.current) return;
    const observer = new IntersectionObserver(getMorePosts, options);
    observer.observe(lastChild.current);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingPostList]);

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <PostListWrapper>
      {postList}
      <SpinnerWrapper ref={lastChild}>
        <Spinner size={50} />
      </SpinnerWrapper>
    </PostListWrapper>
  );
}

export default HomePage;
