import React, { useState, useCallback } from 'react';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import NewPostWrapper from './NewPostWrapper';
import Input from './Input';
import Button from './Button';

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

const minZoom = 1;

const NewPostPage = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(minZoom);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const inputImage = async e => {
    if (e.target.files && e.target.files.length > 0) {
      setOriginalImage(e.target.files[0]);
      const originalImageDataUrl = await readFile(e.target.files[0]);
      setOriginalImageUrl(originalImageDataUrl);
    }
  };

  const post = useCallback(async () => {
    try {
      const croppedImageDataUrl = await getCroppedImg(
        originalImageUrl,
        croppedAreaPixels,
      );
      const croppedImageResponse = await fetch(`${croppedImageDataUrl}`);
      const blob = await croppedImageResponse.blob();
      const croppedImageBolb = blobToFile(blob, `${originalImage.name}`);
      const croppedImageFile = new File(
        [croppedImageBolb],
        `${originalImage.name}`,
        {
          type: 'image/png',
        },
      );
      const formData = new FormData();
      formData.append('file', croppedImageFile);

      const storedImageResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      const { data } = await storedImageResponse.json();
    } catch (e) {}
  }, [croppedAreaPixels, originalImage, originalImageUrl]);

  const onCropComplete = useCallback(
    (croppedArea, currentcroppedAreaPixels) => {
      setCroppedAreaPixels(currentcroppedAreaPixels);
    },
    [],
  );

  return (
    <NewPostWrapper>
      <div className="section">
        <input type="file" onChange={inputImage} />
      </div>
      {originalImage && (
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
              image={originalImageUrl}
              crop={crop}
              zoom={zoom}
              aspect={2 / 2}
              restrictPosition={false}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropSize={{ width: 600, height: 600 }}
            />
          </div>
          <div className="controls" style={{ width: '20%' }}>
            <Slider
              value={originalImage.zoom}
              min={minZoom}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, currentzoom) => setZoom(currentzoom)}
              classes={{ container: 'slider' }}
            />
          </div>
        </>
      )}
      <div className="section">
        <Input />
      </div>
      <div className="section">
        <Button onClick={post}>게시</Button>
      </div>
    </NewPostWrapper>
  );
};

export default NewPostPage;
