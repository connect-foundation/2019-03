import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withCookies } from 'react-cookie';

import { CREATE_COMMENT } from '../../queries';
import Loading from '../Loading';

import {
  StyledForm,
  StyledButton,
  StyledInput,
  CommentInputWrapper,
} from './styles';

function CommentInput({
  post,
  writer,
  cookies,
  scrollRef,
  commentRef,
  updateCommentListCache,
}) {
  const myInfo = cookies.get('myInfo');
  const [addComment, { loading }] = useMutation(CREATE_COMMENT, {
    update(cache, { data: { createComment } }) {
      updateCommentListCache({
        cache,
        myInfo,
        createdComment: createComment,
        PostId: post.id,
      });
    },
  });

  const [text, setText] = useState('');

  const isEmpty = text === '';

  const onChange = e => {
    setText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (loading) return;
    if (scrollRef) scrollRef.current.scrollTo(0, 0);
    addComment({
      variables: {
        content: text,
        WriterId: writer.id,
        PostId: post.id,
        UserId: myInfo.id,
      },
    });
    setText('');
  };

  return (
    <CommentInputWrapper>
      {loading && <Loading size={20} />}
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          placeholder="댓글달기..."
          onChange={onChange}
          value={text}
          ref={commentRef}
        />
        <StyledButton type="submit" disabled={isEmpty}>
          게시
        </StyledButton>
      </StyledForm>
    </CommentInputWrapper>
  );
}

export default withCookies(CommentInput);
