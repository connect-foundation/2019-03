import React, { useRef, useEffect, useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import 'intersection-observer';
import { ToastContainer, toast } from 'react-toastify';

import Post from './Post';
import { PostListWrapper, SpinnerWrapper } from './styles';
import { FOLLOWING_POST_LIST } from '../../queries';
import Spinner from '../../components/Spinner';
import UserContext from '../App/UserContext';
import NoFollowing from './NoFollowing';

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

  const noMorePostHandler = () => {
    if (noMorePost) return;
    setNoMorePost(true);
    toast.warn('더 이상 새로운 게시글이 없습니다!', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
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
        if (!fetchMoreResult.followingPostList.length) noMorePostHandler();
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
    if (noMorePost) return;
    const observer = new IntersectionObserver(getMorePosts, options);
    observer.observe(lastChild.current);

    if (data && !followingPostList.length) noMorePostHandler();

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingPostList]);

  if (error) return <div>에러가 발생했습니다</div>;
  if (data && !followingPostList.length) {
    return <NoFollowing />;
  }
  return (
    <PostListWrapper>
      {postList}
      {!noMorePost && (
        <SpinnerWrapper ref={lastChild}>
          <Spinner size={50} />
        </SpinnerWrapper>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </PostListWrapper>
  );
}

export default HomePage;
