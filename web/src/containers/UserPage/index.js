import React, { useEffect } from 'react';

import PostCardList from '../../components/PostCardList';
import UserPageInfo from './UserPageInfo';
import ListSelector from './ListSelector';
import { UserPageWrapper, UserPageSection } from './styles';

import { useFetch } from '../../hooks';

const UserPage = ({ match }) => {
  const { username } = match.params;

  const userPageQuery = `{
    userPage(writer:"${username}"){
      isExistingUser
      postCard{
        postURL
        imageURL
      }
    }
  }`;

  const { state, fetchData } = useFetch();
  useEffect(() => {
    fetchData(userPageQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPageQuery]);
  const { loading, data, error } = state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  if (!data.userPage.isExistingUser) return <div>존재하지않는 유저입니다.</div>;
  return (
    <UserPageWrapper>
      <UserPageSection>
        <UserPageInfo username={username} />
        <ListSelector username={username} />
        <PostCardList data={data.userPage} />
      </UserPageSection>
    </UserPageWrapper>
  );
};

export default UserPage;
