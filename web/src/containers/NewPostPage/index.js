import React, { useReducer, useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import { NewPostWrapper, Input, Button } from './styles';

const readFile = file => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

const blobToFile = (theBlob, fileName) => {
  // A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
};

const newBlob = async dataURL => {
  const croppedImageResponse = await fetch(`${dataURL}`);
  const blob = await croppedImageResponse.blob();
  return blob;
};

const isFileTypeImage = filename => {
  const filenameDivided = filename.split('.');
  const fileExtension = filenameDivided[filenameDivided.length - 1];

  const imageExtension = ['jpg', 'jpge', 'png', 'gif'];
  return imageExtension.includes(fileExtension);
};

const minZoom = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_IMAGE':
      return {
        ...state,
        originalImage: action.value,
      };
    case 'INPUT_IMAGE_URL':
      return {
        ...state,
        originalImageUrl: action.value,
      };
    case 'INPUT_CROPPED_AREA':
      return {
        ...state,
        croppedAreaPixels: action.value,
      };
    case 'INPUT_CONTENT':
      return {
        ...state,
        contentValue: action.value,
      };
    case 'CHANGE_ZOOM':
      return {
        ...state,
        zoom: action.value,
      };
    case 'CHANGE_CROP':
      return {
        ...state,
        crop: action.value,
      };
    default:
      return null;
  }
};

const NewPostPage = () => {
  const initialState = {
    originalImage: null,
    originalImageUrl: null,
    crop: { x: 0, y: 0 },
    zoom: minZoom,
    croppedAreaPixels: null,
    contentValue: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSuccess, setSuccess] = useState(false);

  const inputImage = async e => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch({ type: 'INPUT_IMAGE', value: e.target.files[0] });

      const originalImageDataUrl = await readFile(e.target.files[0]);
      dispatch({ type: 'INPUT_IMAGE_URL', value: originalImageDataUrl });
    }
  };

  const post = useCallback(async () => {
    if (!state.originalImage) {
      alert('사진을 선택해주세요!');
      return;
    }

    if (!isFileTypeImage(state.originalImage.name)) {
      alert('이미지 파일만 업로드 할 수 있습니다!');
      return;
    }

    try {
      const croppedImageDataUrl = await getCroppedImg(
        state.originalImageUrl,
        state.croppedAreaPixels,
      );
      const blob = await newBlob(croppedImageDataUrl);
      const croppedImageBolb = blobToFile(blob, `${state.originalImage.name}`);
      const croppedImageFile = new File(
        [croppedImageBolb],
        `${state.originalImage.name}`,
        { type: 'image/png' },
      );
      const formData = new FormData();
      formData.append('file', croppedImageFile);
      formData.append('content', state.contentValue);
      formData.append('userId', 1);
      const resultJSON = await fetch(
        `${process.env.REACT_APP_API_URL}/upload`,
        {
          method: 'POST',
          body: formData,
        },
      );
      const result = await resultJSON.json();
      if (result.data === 'success') {
        setSuccess(true);
      }
    } catch (e) {}
  }, [setSuccess, state]);

  const onCropComplete = useCallback(
    (croppedArea, currentcroppedAreaPixels) => {
      dispatch({ type: 'INPUT_CROPPED_AREA', value: currentcroppedAreaPixels });
    },
    [],
  );

  const changeContent = e => {
    dispatch({ type: 'INPUT_CONTENT', value: e.target.value });
  };

  if (isSuccess) {
    return <Redirect to="/" />;
  }

  return (
    <NewPostWrapper>
      <div className="section">
        <input
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={inputImage}
        />
      </div>
      {state.originalImage && (
        <>
          <div
            className="crop-container"
            style={{
              position: 'relative',
              width: '650px',
              height: '650px',
            }}
          >
            <Cropper
              minZoom={minZoom}
              image={state.originalImageUrl}
              crop={state.crop}
              zoom={state.zoom}
              aspect={1 / 1}
              restrictPosition={false}
              onCropChange={crop =>
                dispatch({ type: 'CHANGE_CROP', value: crop })}
              onCropComplete={onCropComplete}
              onZoomChange={zoom =>
                dispatch({ type: 'CHANGE_ZOOM', value: zoom })}
              cropSize={{ width: 615, height: 615 }}
            />
          </div>
          <div className="controls" style={{ width: '20%' }}>
            <Slider
              value={state.zoom}
              min={minZoom}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, currentzoom) =>
                dispatch({ type: 'CHANGE_ZOOM', value: currentzoom })}
            />
          </div>
        </>
      )}
      <div className="section">
        <Input value={state.contentValue} onChange={changeContent} />
      </div>
      <div className="section">
        <Button type="button" onClick={post}>
          게시
        </Button>
      </div>
    </NewPostWrapper>
  );
};

export default NewPostPage;
