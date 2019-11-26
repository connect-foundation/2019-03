import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PostDetailPageWrapper, ViewPort } from './styles';
import PostSideBox from './PostSideBox';
import { PostProvider } from './context';
import useFetch from '../../useFetch';

function PostDetailPage({ match }) {
  const postDetailQuery = `{
    post(postURL:"${match.params.postURL}"){
      id,
      content,
      writer{
        username
      }
      imageURL,
      postURL,
      likeCount
    }
  }`;
  const [state, dispatch] = useFetch(postDetailQuery);
  const { loading, data, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  const { post } = data;
  const images = require.context('../../images', true);
  const postImage = images(`./${post.imageURL}`);

  return (
    <PostProvider value={{ data, dispatch }}>
      <ThemeProvider theme={{ post_length: 600 }}>
        <PostDetailPageWrapper>
          <ViewPort img={postImage} />
          <PostSideBox />
        </PostDetailPageWrapper>
      </ThemeProvider>
    </PostProvider>
  );
}

export default PostDetailPage;
