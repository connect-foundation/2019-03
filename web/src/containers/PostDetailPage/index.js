import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { withCookies } from 'react-cookie';

import { PostDetailPageWrapper, ViewPort } from './styles';
import PostSideBox from './PostSideBox';
import { READ_POST } from '../../queries';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function PostDetailPage({ match, cookies }) {
  const myInfo = cookies.get('myInfo');
  const { loading, error, data } = useQuery(READ_POST, {
    variables: { postURL: match.params.postURL, UserId: myInfo.id },
    fetchPolicy: 'first',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading size={50} />;
  if (error) return <Error />;
  if (!data) return null;
  const { post } = data;

  return (
    <ThemeProvider theme={{ post_length: 600 }}>
      <PostDetailPageWrapper>
        <ViewPort img={post.imageURL} />
        <PostSideBox post={post} />
      </PostDetailPageWrapper>
    </ThemeProvider>
  );
}

export default withCookies(PostDetailPage);
