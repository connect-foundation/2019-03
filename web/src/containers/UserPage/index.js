import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import PostCardList from '../../components/PostCardList';
import UserPageInfo from './UserPageInfo';
import ListSelector from './ListSelector';
import { UserPageWrapper, UserPageSection } from './styles';

const UserPage = ({ match, myInfo }) => {
  const { username } = match.params;
  const { id, username: myname } = myInfo;
  const isMyPage = username === myname;

  const [dataState, setDataState] = useState(null);
  const [selectionTabState, setSelectionTabState] = useState('게시물');

  const userPageQuery = gql`
    query UserPage($username: String!, $myId: ID!) {
      userPage(username: $username, myId: $myId) {
        isExistingUser
        userInfo {
          name
          id
          profileImage
          isFollowing
          postNumber
          followersNum
          followsNum
        }
        postCard {
          postURL
          imageURL
        }
      }
    }
  `;

  const TAGGED_POSTS = gql`
    query TaggedPosts($username: String!, $myId: Int!) {
      taggedPosts(username: $username, myId: $myId) {
        postURL
        imageURL
      }
    }
  `;

  const { loading, error, data } = useQuery(userPageQuery, {
    variables: { username, myId: id },
    fetchPolicy: 'cache-and-network',
  });
  const [loadTaggedPosts, taggedPostsResult] = useLazyQuery(TAGGED_POSTS, {
    variables: {
      username,
      myId: id,
    },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    setDataState(data);
  }, [data]);

  const isTaggedPostsReady =
    selectionTabState !== '게시물' && !!taggedPostsResult.data;

  const getPostCardListData = () => {
    if (isTaggedPostsReady) {
      const postCardListData = { postCard: taggedPostsResult.data.taggedPosts };
      return postCardListData;
    }
    return data.userPage;
  };

  const onFollowCancel = () => {
    setDataState(prevData => {
      const nextData = { ...prevData };
      nextData.userPage.userInfo.followersNum -= 1;
      return nextData;
    });
  };

  const onFollow = () => {
    setDataState(prevData => {
      const nextData = { ...prevData };
      nextData.userPage.userInfo.followersNum += 1;
      return nextData;
    });
  };

  const onClickPostTab = () => {
    setSelectionTabState('게시물');
  };

  const onClickTaggedTab = () => {
    setSelectionTabState('태그됨');
    loadTaggedPosts();
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!dataState) return <div>dataState가 없습니다.</div>;
  if (!data.userPage.isExistingUser) return <div>존재하지않는 유저입니다.</div>;
  return (
    <UserPageWrapper>
      <UserPageSection>
        <UserPageInfo
          username={username}
          myId={id}
          data={dataState.userPage.userInfo}
          isMyPage={isMyPage}
          onFollowCancel={onFollowCancel}
          onFollow={onFollow}
        />
        <ListSelector
          selectionTabState={selectionTabState}
          onClickPostTab={onClickPostTab}
          onClickTaggedTab={onClickTaggedTab}
        />
        <PostCardList data={getPostCardListData()} />
      </UserPageSection>
    </UserPageWrapper>
  );
};

export default UserPage;
