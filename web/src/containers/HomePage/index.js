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

const LIMIT = 5;
function HomePage() {
  const [noMorePost, setNoMorePost] = useState(false);
  const lastChild = useRef();
  const middleChild = useRef();
  const { data, loading, error, fetchMore } = useQuery(FOLLOWING_POST_LIST, {
    variables: {
      myId: myInfo.id,
      limit: LIMIT,
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const options = {
    root: null,
    threshold: 0,
  };

  const getMorePosts = entries => {
    if (loading) return;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const list = data.followingPostList;
      const cursor = list.length ? [...list].pop().updatedAt : null;
      fetchMore({
        variables: {
          cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (!fetchMoreResult.followingPostList.length) setNoMorePost(true);
          return {
            ...prev,
            followingPostList: [
              ...prev.followingPostList,
              ...fetchMoreResult.followingPostList,
            ],
          };
        },
      });
    });
  };

  const { followingPostList } = data || { followingPostList: [] };

  const postList = followingPostList.map((post, index) =>
    index === followingPostList.length - 3 ? (
      <Post key={post.id} post={post} myInfo={myInfo} ref={middleChild} />
    ) : (
      <Post key={post.id} post={post} myInfo={myInfo} />
    ),
  );

  const spinner = noMorePost ? (
    <div>더 이상 게시글이 없습니다.</div>
  ) : (
    <SpinnerWrapper ref={lastChild}>
      <Spinner size={50} />
    </SpinnerWrapper>
  );
  useEffect(() => {
    if (!lastChild.current) return;
    if (noMorePost) return;
    const observer = new IntersectionObserver(getMorePosts, options);
    observer.observe(lastChild.current);
    if (middleChild.current) observer.observe(middleChild.current);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingPostList]);

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <PostListWrapper>
      {postList}
      {spinner}
    </PostListWrapper>
  );
}

export default HomePage;
