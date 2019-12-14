import React, { useRef, useEffect, useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import 'intersection-observer';

import Post from './Post';
import { PostListWrapper, SpinnerWrapper } from './styles';
import { FOLLOWING_POST_LIST } from '../../queries';
import Spinner from '../../components/Spinner';
import UserContext from '../App/UserContext';

const LIMIT = 5;
function HomePage() {
  const { myInfo } = useContext(UserContext);
  const [noMorePost, setNoMorePost] = useState(false);
  const lastChild = useRef();
  const { data, loading, error, fetchMore } = useQuery(FOLLOWING_POST_LIST, {
    variables: {
      myId: myInfo.id,
      limit: LIMIT,
    },
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });

  const options = {
    root: null,
    threshold: 0,
  };
  const getMorePosts = (entries, observer) => {
    if (loading) return;
    if (data && !data.followingPostList.length) return;
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    observer.disconnect();
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
  };

  const { followingPostList } = data || { followingPostList: [] };

  const postList = followingPostList.map((post, index) => (
    <Post key={post.id} post={post} myInfo={myInfo} />
  ));

  useEffect(() => {
    if (!lastChild.current) return;
    if (noMorePost) return;
    const observer = new IntersectionObserver(getMorePosts, options);
    observer.observe(lastChild.current);

    if (data && !followingPostList.length) setNoMorePost(true);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingPostList]);

  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <PostListWrapper>
      {postList}
      {!noMorePost && (
        <SpinnerWrapper ref={lastChild}>
          <Spinner size={50} />
        </SpinnerWrapper>
      )}
    </PostListWrapper>
  );
}

export default HomePage;
