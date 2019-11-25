import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { PostDetailPageWrapper, ViewPort } from './styles';
import PostSideBox from './PostSideBox';
import reducer from './reducer';
import { PostProvider } from './context';

function PostDetailPage() {
  const initialState = {
    post: {
      content: '올 겨울 신상',
      updatedAt: null,
      writer: {
        username: 'queen',
        isFollow: true,
        profileURL: 'queen.jpg',
      },
      imageURL:
        'http://image.chosun.com/sitedata/image/201705/11/2017051101043_0.jpg',
      postURL: null,
    },
    comments: [
      {
        user: {
          username: 'jack',
          profileURL: null,
        },
        content:
          ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
        updatedAt: null,
        likers: 32,
        commentId: 111,
      },
      {
        user: {
          username: 'sam',
          profileURL: null,
        },
        content:
          ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
        updatedAt: null,
        likers: 32,
        commentId: 111,
      },
      {
        user: {
          username: 'sam',
          profileURL: null,
        },
        content:
          ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
        updatedAt: null,
        likers: 32,
        commentId: 111,
      },
      {
        user: {
          username: 'pet',
          profileURL: null,
        },
        content:
          ' 11월 고고쉼 후원판매☃️ 여러분! 오늘은 이캠 하나스퀘어의 피아노 라운지 옆에서 고고쉼 후원판매를 진행하고 있으니 많이많이 가주세요!!',
        updatedAt: null,
        likers: 32,
        commentId: 111,
      },
    ],
    likerCounts: 100,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const postImg = new Image();
  postImg.src = state.post.imageURL;
  return (
    <PostProvider value={{ state, dispatch }}>
      <ThemeProvider theme={{ post_length: 600 }}>
        <PostDetailPageWrapper>
          <ViewPort img={postImg} />
          <PostSideBox />
        </PostDetailPageWrapper>
      </ThemeProvider>
    </PostProvider>
  );
}

export default PostDetailPage;
