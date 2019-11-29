import React, { useEffect } from 'react';

import PostCardList from '../../components/PostCardList';
import UserPageInfo from './UserPageInfo';
import ListSelector from './ListSelector';
import { UserPageWrapper, UserPageSection } from './styles';

import { useFetch } from '../../hooks';

const UserPage = ({ match }) => {
  const { username } = match.params;

  const postCardURL = `{
    postCard(writer:"${username}"){
      postURL
      imageURL
    }
  }`;

  const { state, fetchData } = useFetch();
  useEffect(() => {
    fetchData(postCardURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { loading, data, error } = state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  return (
    <UserPageWrapper>
      <UserPageSection>
        <UserPageInfo username={username} />
        <ListSelector username={username} />
        <PostCardList data={data} />
      </UserPageSection>
    </UserPageWrapper>
  );
};

export default UserPage;
