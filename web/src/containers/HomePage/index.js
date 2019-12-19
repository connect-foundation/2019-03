import React, { useRef, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import { withCookies } from 'react-cookie';
import 'intersection-observer';
import 'react-toastify/dist/ReactToastify.css';

import Error from '../../components/Error';
import Post from './Post';
import { PostListWrapper, SpinnerWrapper } from './styles';
import { FOLLOWING_POST_LIST } from '../../queries';
import Spinner from '../../components/Spinner';
import NoFollowing from './NoFollowing';

const POST_LIST_REQUEST_DEFAULT_LIMIT = 5;

function HomePage({ cookies }) {
  const myInfo = cookies.get('myInfo');
  const [noMorePost, setNoMorePost] = useState(false);
  const spinnerRef = useRef();

  const { data, loading, error, fetchMore } = useQuery(FOLLOWING_POST_LIST, {
    variables: {
      myId: myInfo.id,
      limit: POST_LIST_REQUEST_DEFAULT_LIMIT,
    },
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
  });

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

  const requestMorePosts = ({ cursor }) => {
    fetchMore({
      variables: {
        cursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        if (!fetchMoreResult.followingPostList.length)
          noMorePostHandler(noMorePost);
        const updatedFollowingList = {
          ...prev,
          followingPostList: [
            ...prev.followingPostList,
            ...fetchMoreResult.followingPostList,
          ],
        };
        return updatedFollowingList;
      },
    });
  };

  const checkAndRequestMorePost = (entries, observer) => {
    if (loading) return;
    if (data && !data.followingPostList.length) return;
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    observer.disconnect();
    const list = data.followingPostList;
    const cursor = list.length ? [...list].pop().updatedAt : null;
    requestMorePosts({ cursor });
  };

  const { followingPostList } = data || { followingPostList: [] };

  const postList = followingPostList.map(post => (
    <Post key={post.id} post={post} myInfo={myInfo} />
  ));

  const observerOption = {
    root: null,
    threshold: 0,
  };

  useEffect(() => {
    if (!spinnerRef.current) return;
    if (noMorePost) return;
    const observer = new IntersectionObserver(
      checkAndRequestMorePost,
      observerOption,
    );
    observer.observe(spinnerRef.current);

    if (data && !followingPostList.length) noMorePostHandler();

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followingPostList]);

  if (error) return <Error status={500} />;
  if (data && !followingPostList.length) {
    return <NoFollowing />;
  }
  return (
    <PostListWrapper>
      {postList}
      {!noMorePost && (
        <SpinnerWrapper ref={spinnerRef}>
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

export default withCookies(HomePage);
