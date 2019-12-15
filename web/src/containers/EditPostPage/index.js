import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import { PostDetailPageWrapper, ViewPort } from './styles';
import EditBox from './EditBox';
import { READ_POST_SIMPLE } from '../../queries';

function PostDetailPage({ match }) {
  const { loading, error, data } = useQuery(READ_POST_SIMPLE, {
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
