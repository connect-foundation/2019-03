import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withCookies } from 'react-cookie';

import { isFileTypeImage } from '../../utils/fileUtils';
import makeNewImageFile from './lib/makeNewImageFile';
import useImage from './hooks/useImage';
import Loading from '../../components/Loading';
import Button from '../../components/Button';

import {
  NewPostWrapper,
  Content,
  FileSelectLabel,
  FileInput,
  FileNameInput,
  StyledSection,
  CropContainer,
} from './styles';
import { UPLOAD_POST, FOLLOWING_POST_LIST } from '../../queries';

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;
const CROP_SIZE = 615;

const NewPostPage = ({ cookies }) => {
  const myInfo = cookies.get('myInfo');
  const [uploadPostMutation, { error }] = useMutation(UPLOAD_POST, {
    update(cache, { data: { createPost } }) {
      const { followingPostList } = cache.readQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
      });
      const writer = {
        ...myInfo,
        isFollow: true,
        profileImage: myInfo.profileImage,
        __typename: 'User',
      };
      const newPost = {
        writer,
        ...createPost,
        isLike: false,
        commentCount: 0,
        commentList: [],
        likerInfo: {
          username: '',
          profileImage: '',
          likerCount: 0,
          __typename: 'LikerInfoType',
        },
        __typename: 'Post',
      };
      cache.writeQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
        data: { followingPostList: [newPost].concat(followingPostList) },
      });
    },
  });

  const initialState = {
    originalImage: { name: undefined },
    originalImageUrl: null,
    crop: { x: 0, y: 0 },
    zoom: MIN_ZOOM,
    croppedAreaPixels: null,
  };

  const [
    state,
    inputImage,
    onCropComplete,
    changeCrop,
    changeZoom,
    changeSliderZoom,
  ] = useImage(initialState);
  const [content, setContent] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeContent = e => {
    setContent(e.target.value);
  };

  const post = useCallback(async () => {
    if (loading) return;

    if (!state.originalImage) {
      toast('사진을 선택해주세요!');
      return;
    }

    if (!isFileTypeImage(state.originalImage.name)) {
      toast('이미지 파일만 업로드 할 수 있습니다!');
      return;
    }

    if (state.originalImage.size > 4500000) {
      toast('5MB 이하의 파일만 업로드 할 수 있습니다!');
      return;
    }

    try {
      setLoading(true);
      const croppedImageFile = await makeNewImageFile(state);
      await uploadPostMutation({
        variables: { file: croppedImageFile, userId: myInfo.id, content },
      });
      setSuccess(true);
    } catch (e) {
      toast('올바른 이미지가 아닙니다. 다른 이미지를 선택해주세요.', {
        onClose: () => {
          window.location.href = '/new/post';
        },
      });
    }
  }, [content, loading, myInfo.id, state, uploadPostMutation]);

  if (error) {
    toast('5MB 이상의 파일 또는 이모지 입력은 준비중입니다.', {
      onClose: () => {
        window.location.href = '/new/post';
      },
    });
  }

  if (isSuccess) {
    return <Redirect to="/" />;
  }
  return (
    <NewPostWrapper>
      {loading && <Loading size={50} />}
      <StyledSection>
        <FileNameInput defaultValue={state.originalImage.name} />
        <FileSelectLabel htmlFor="select_file">파일선택</FileSelectLabel>
        <FileInput onChange={inputImage} />
      </StyledSection>
      {state.originalImage.name && (
        <>
          <CropContainer>
            <Cropper
              minZoom={MIN_ZOOM}
              image={state.originalImageUrl}
              crop={state.crop}
              zoom={state.zoom}
              aspect={1 / 1}
              restrictPosition={false}
              onCropChange={changeCrop}
              onCropComplete={onCropComplete}
              onZoomChange={changeZoom}
              cropSize={{ width: CROP_SIZE, height: CROP_SIZE }}
            />
          </CropContainer>
          <div className="controls">
            <Slider
              value={state.zoom}
              min={MIN_ZOOM}
              max={MAX_ZOOM}
              step={ZOOM_STEP}
              aria-labelledby="Zoom"
              onChange={changeSliderZoom}
            />
          </div>
        </>
      )}
      <StyledSection>
        <Content onChange={changeContent} value={content} />
      </StyledSection>
      <StyledSection>
        <Button type="button" onClick={post} btnStyle="primary">
          게시
        </Button>
      </StyledSection>
      <ToastContainer
        autoClose={1000}
        hideProgressBar
        position={toast.POSITION.BOTTOM_CENTER}
        transition={Slide}
        bodyClassName="toast-body"
      />
    </NewPostWrapper>
  );
};

export default withCookies(NewPostPage);
