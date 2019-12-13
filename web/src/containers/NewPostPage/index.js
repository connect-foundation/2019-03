import React, { useCallback, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isFileTypeImage } from '../../utils/fileUtils';
import makeNewImageFile from './lib/makeNewImageFile';
import useImage from './hooks/useImage';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Error from '../../components/Error';
import {
  NewPostWrapper,
  Content,
  FileSelectLabel,
  FileInput,
  FileNameInput,
} from './styles';
import UserContext from '../App/UserContext';

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;
const CROP_SIZE = 615;

const NewPostPage = () => {
  const { myInfo } = useContext(UserContext);

  const initialState = {
    originalImage: '',
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

    try {
      setLoading(true);
      const croppedImageFile = await makeNewImageFile(state);
      const formData = new FormData();
      formData.append('file', croppedImageFile);
      formData.append('content', content);
      formData.append('userId', myInfo.id);

      const resultJSON = await fetch(
        `${process.env.REACT_APP_API_URL}/upload`,
        {
          method: 'POST',
          body: formData,
        },
      );
      const result = await resultJSON.json();
      if (result.result === 'success') {
        setSuccess(true);
      }
    } catch (e) {}
  }, [content, loading, myInfo.id, state]);

  if (isSuccess) {
    return <Redirect to="/" />;
  }
  return (
    <NewPostWrapper>
      {loading && <Loading size={50} />}
      <div className="section">
        <FileNameInput value={state.originalImage.name} />
        <FileSelectLabel htmlFor="select_file">파일선택</FileSelectLabel>
        <FileInput onChange={inputImage} />
      </div>
      {state.originalImage && (
        <>
          <div className="crop-container">
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
          </div>
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
      <div className="section">
        <Content onChange={changeContent} value={content} />
      </div>
      <div className="section">
        <Button type="button" onClick={post} btnStyle="primary">
          게시
        </Button>
      </div>
      <ToastContainer
        autoClose={false}
        position={toast.POSITION.BOTTOM_CENTER}
        transition={Slide}
        bodyClassName="toast-body"
      />
    </NewPostWrapper>
  );
};

export default NewPostPage;
