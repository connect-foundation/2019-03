import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Cropper from 'react-easy-crop';

function readFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

const NewPostPage = () => {
  const [file, setFile] = useState({
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1 / 1,
  });

  const inputFile = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await readFile(e.target.files[0]);
      setFile({ ...file, imageSrc: imageDataUrl });
    }
  };

  const onCropChange = crop => {
    setFile({ ...file, crop });
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  const onZoomChange = zoom => {
    setFile({ ...file, zoom });
  };

  const post = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      const { data } = await response.json();
    } catch (e) {}
  };

  return (
    <div style={{ psotion: 'absolute' }}>
      <input type="file" onChange={inputFile} />
      {file.imageSrc && (
        <>
          <div
            className="crop-container"
            style={{ position: 'relative', width: '100%', height: '400px' }}
          >
            <Cropper
              image={file.imageSrc}
              crop={file.crop}
              zoom={file.zoom}
              aspect={file.aspect}
              onCropChange={onCropChange}
              onCropComplete={onCropComplete}
              onZoomChange={onZoomChange}
            />
          </div>
          <div className="controls">
            <Slider
              value={file.zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => onZoomChange(zoom)}
              classes={{ container: 'slider' }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NewPostPage;
