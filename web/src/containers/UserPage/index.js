import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import PostCardList from '../../components/PostCardList';
import UserPageInfo from './UserPageInfo';
import ListSelector from './ListSelector';
import { UserPageWrapper, UserPageSection } from './styles';

const UserPage = ({ match, myInfo }) => {
  const { username } = match.params;
  const { id } = myInfo;

  const userPageQuery = gql`
    query UserPage($writer: String!, $myId: Int!) {
      userPage(writer: $writer, myId: $myId) {
        isExistingUser
        userInfo {
          name
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

  const { loading, error, data, refetch } = useQuery(userPageQuery, {
    variables: { writer: username, myId: id },
  });
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data.userPage.isExistingUser) return <div>존재하지않는 유저입니다.</div>;
  return (
    <UserPageWrapper>
      <UserPageSection>
        <UserPageInfo username={username} data={data.userPage.userInfo} />
        <ListSelector username={username} />
        <PostCardList data={data.userPage} />
      </UserPageSection>
    </UserPageWrapper>
  );
};

export default UserPage;
