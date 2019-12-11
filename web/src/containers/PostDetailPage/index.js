import React from 'react';
import { ThemeProvider } from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PostDetailPageWrapper, ViewPort } from './styles';
import PostSideBox from './PostSideBox';
import { PostProvider } from './context';
import ErrorWrapper from '../ErrorPage/ErrorWrapper';
import ErrorPage from '../ErrorPage';

function PostDetailPage({ match }) {
  const POST_DETAIL = gql`
    query Post($postURL: String!) {
      post(postURL: $postURL) {
        id
        content
        writer {
          username
        }
        imageURL
        postURL
      }
    }
  `;
  const { loading, error, data } = useQuery(POST_DETAIL, {
    variables: { postURL: match.params.postURL },
  });

  if (loading) return <div>로딩중..</div>;
  if (error) return <ErrorPage />;
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
