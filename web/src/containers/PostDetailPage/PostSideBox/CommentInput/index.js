import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_COMMENT, COMMENT_LIST } from '../../../../queries';
import Loading from '../../../../components/Loading';
import UserContext from '../../../App/UserContext';

import {
  StyledForm,
  StyledButton,
  StyledInput,
  CommentInputWrapper,
} from './styles';

function CommentInput({ PostId, writer, scrollRef }) {
  const { myInfo } = useContext(UserContext);
  const [addComment, { loading }] = useMutation(CREATE_COMMENT, {
    update(cache, { data: { createComment } }) {
      const { commentList } = cache.readQuery({
        query: COMMENT_LIST,
        variables: {
          PostId,
          offset: 0,
          limit: 5,
        },
      });
      cache.writeQuery({
        query: COMMENT_LIST,
        variables: {
          PostId,
          offset: 0,
          limit: 5,
        },
        data: { commentList: [createComment].concat(commentList) },
      });
    },
  });

  const [text, setText] = useState('');

  const isEmpty = text === '';

  const onChange = e => {
    setText(e.target.value);
  };

  const submitHandler = e => {
    if (loading) return;
    e.preventDefault();
    scrollRef.current.scrollTo(0, 0);
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

export default CommentInput;
