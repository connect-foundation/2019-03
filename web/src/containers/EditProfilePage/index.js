import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withCookies } from 'react-cookie';

import InputRow from '../../components/InputRow';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Loading from '../../components/Loading';
import ProfileIcon from '../../components/ProfileIcon';
import { Username, UpdateProfile } from './styles';

import { isFileTypeImage } from '../../utils/fileUtils';
import { UPDATE_USER, UPDATE_PROFILE } from '../../queries';
import { FileInput } from '../NewPostPage/styles';

function EditProfilePage({ setItem, cookies }) {
  const myInfo = cookies.get('myInfo');
  const [updateUser, { loading, data, error }] = useMutation(UPDATE_USER);
  const [updateProfile] = useMutation(UPDATE_PROFILE);

  const [state, setstate] = useState({
    name: myInfo.name,
    username: myInfo.username,
    email: myInfo.email,
    cellPhone: myInfo.cellPhone,
    profileImage: myInfo.profileImage,
  });

  const onInputValueChanged = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const changeProfile = async e => {
    if (!isFileTypeImage(e.target.files[0].name)) {
      toast('이미지 파일만 업로드 할 수 있습니다!');
      return;
    }

    const result = await updateProfile({
      variables: { file: e.target.files[0], userId: myInfo.id },
    });
    cookies.set(
      'myInfo',
      {
        ...myInfo,
        profileImage: result.data.updateProfile,
      },
      { path: '/' },
    );
    setstate({
      ...state,
      profileImage: result.data.updateProfile,
    });
  };

  useEffect(() => {
    setItem('프로필 편집');
    return () => setItem(null);
  }, [setItem]);

  const submitHanlder = event => {
    event.preventDefault();
    const variables = { id: myInfo.id };
    if (state.name !== myInfo.name) variables.name = state.name;
    if (state.username !== myInfo.username) variables.username = state.username;
    if (state.email !== myInfo.email) variables.email = state.email;
    if (state.cellPhone !== myInfo.cellPhone)
      variables.cellPhone = state.cellPhone;
    updateUser({
      variables,
    });
  };

  if (error) {
    let message = '알 수 없는 에러가 발생했습니다.';
    if (error.message === 'Network error: Failed to fetch')
      message = '서버와 연결이 끊어졌습니다.';
    if (error.message === 'GraphQL error: Validation error')
      message = '사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요.';
    toast(message);
  }

  if (data) return <Redirect to="./" />;

  return (
    <>
      <Form onSubmit={submitHanlder}>
        {loading && <Loading size={50} />}
        <InputRow
          customComponent={<ProfileIcon imageURL={myInfo.profileImage} />}
          rightComponent={
            <div>
              <Username>{myInfo.username}</Username>
              <UpdateProfile htmlFor="select_file">
                프로필 사진 바꾸기
              </UpdateProfile>
              <FileInput onChange={changeProfile} />
            </div>
          }
        />
        <InputRow
          label="이름"
          rightComponent={
            <Input
              name="name"
              id="pep이름"
              defaultValue={state.name}
              onBlur={onInputValueChanged}
            />
          }
        />
        <InputRow
          label="사용자 이름"
          rightComponent={
            <Input
              name="username"
              id="pep사용자 이름"
              defaultValue={state.username}
              onBlur={onInputValueChanged}
            />
          }
        />
        <InputRow
          label="이메일"
          rightComponent={
            <Input
              name="email"
              id="pep이메일"
              defaultValue={state.email}
              onBlur={onInputValueChanged}
            />
          }
        />
        <InputRow
          label="전화번호"
          rightComponent={
            <Input
              name="cellPhone"
              id="pep전화번호"
              defaultValue={state.cellPhone}
              onBlur={onInputValueChanged}
            />
          }
        />
        <InputRow
          rightComponent={
            <Button btnStyle="primary" type="submit">
              제출
            </Button>
          }
        />
      </Form>
    </>
  );
}

export default withCookies(EditProfilePage);
