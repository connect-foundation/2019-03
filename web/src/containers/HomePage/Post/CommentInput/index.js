import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withCookies } from 'react-cookie';

import { updateCommentListCacheOfPostList } from '../../../../cacheUpdater';
import { CREATE_COMMENT } from '../../../../queries';
import Loading from '../../../../components/Loading';

import {
  StyledForm,
  StyledButton,
  StyledInput,
  CommentInputWrapper,
} from './styles';

function CommentInput({ PostId, writer, cookies }) {
  const myInfo = cookies.get('myInfo');
  const [addComment, { loading }] = useMutation(CREATE_COMMENT, {
    update(cache, { data: { createComment } }) {
      updateCommentListCacheOfPostList({
        cache,
        myInfo,
        createdComment: createComment,
        PostId,
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
    addComment({
      variables: {
        content: text,
        WriterId: writer.id,
        PostId,
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
        />
        <StyledButton type="submit" disabled={isEmpty}>
          게시
        </StyledButton>
      </StyledForm>
    </CommentInputWrapper>
  );
}

export default withCookies(CommentInput);
