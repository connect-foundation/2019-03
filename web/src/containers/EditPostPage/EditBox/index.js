import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_POST } from '../../../queries';
import Loading from '../../../components/Loading';
import Button from '../../../components/Button';

import { EditBoxWrapper, StyledTextBox, ButtonGroup } from './styles';

function EditBox({ post }) {
  const [redirect, setRedirect] = useState(false);
  const [text, setText] = useState(post.content);
  const [updatePost, { loading, error, data }] = useMutation(UPDATE_POST);

  const onTextChange = e => setText(e.target.value);
  const editPost = () => {
    updatePost({ variables: { id: post.id, content: text } });
  };

  const cancelEdit = () => setRedirect(true);

  if (redirect || data) return <Redirect to="/" />;
  if (error) return <div>에러가 발생했습니다!!</div>;
  return (
    <>
      {loading && <Loading size={50} />}
      <EditBoxWrapper>
        <StyledTextBox onChange={onTextChange} value={text} />
        <ButtonGroup>
          <Button onClick={editPost} btnStyle="primary">
            수정
          </Button>
          <Button onClick={cancelEdit} btnStyle="secondary">
            취소
          </Button>
        </ButtonGroup>
      </EditBoxWrapper>
    </>
  );
}

export default EditBox;
