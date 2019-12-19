import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import PostCardList from '../../components/PostCardList';
import UserPageInfo from './UserPageInfo';
import ListSelector from './ListSelector';
import { UserPageWrapper, UserPageSection } from './styles';

const UserPage = ({ match, myInfo }) => {
  const { username } = match.params;
  const { id, username: myname } = myInfo;
  const isMyPage = username === myname;

  const [dataState, setDataState] = useState(null);

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

  const { loading, error, data } = useQuery(userPageQuery, {
    variables: { username, myId: id },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    setDataState(data);
  }, [data]);

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
        <ListSelector username={username} />
        <PostCardList data={data.userPage} />
      </UserPageSection>
    </UserPageWrapper>
  );
};

export default UserPage;
