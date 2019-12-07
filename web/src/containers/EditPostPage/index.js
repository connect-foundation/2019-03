import React from 'react';
import { ThemeProvider } from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PostDetailPageWrapper, ViewPort } from './styles';
import EditBox from './EditBox';

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
        likeCount
      }
    }
  `;
  const { loading, error, data } = useQuery(POST_DETAIL, {
    variables: { postURL: match.params.postURL },
  });

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  const { post } = data;

  return (
    <ThemeProvider theme={{ post_length: 600 }}>
      <PostDetailPageWrapper>
        <ViewPort img={post.imageURL} />
        <EditBox post={post} />
      </PostDetailPageWrapper>
    </ThemeProvider>
  );
}

export default PostDetailPage;
