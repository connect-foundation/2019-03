import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { PostDetailPageWrapper, ViewPort } from './styles';
import PostSideBox from './PostSideBox';
import { PostProvider } from './context';
import { POST_DETAIL } from './queries';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function PostDetailPage({ match }) {
  const { loading, error, data } = useQuery(POST_DETAIL, {
    variables: { postURL: match.params.postURL },
  });

  if (loading) return <Loading size={50} />;
  if (error) return <Error />;
  if (!data) return null;
  const { post } = data;

  return (
    <PostProvider value={{ data }}>
      <ThemeProvider theme={{ post_length: 600 }}>
        <PostDetailPageWrapper>
          <ViewPort img={post.imageURL} />
          <PostSideBox post={post} />
        </PostDetailPageWrapper>
      </ThemeProvider>
    </PostProvider>
  );
}

export default PostDetailPage;
