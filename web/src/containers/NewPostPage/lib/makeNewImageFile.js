import getCroppedImg from './cropImage';

const blobToFile = (theBlob, fileName) => {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
};

const makeNewBlob = async dataURL => {
  const croppedImageResponse = await fetch(`${dataURL}`);
  const blob = await croppedImageResponse.blob();
  return blob;
};

const makeNewImageFile = async state => {
  const croppedImageDataUrl = await getCroppedImg(
    state.originalImageUrl,
    state.croppedAreaPixels,
  );

  const blob = await makeNewBlob(croppedImageDataUrl);
  const croppedImageBolb = blobToFile(blob, `${state.originalImage.name}`);
  const croppedImageFile = new File(
    [croppedImageBolb],
    `${state.originalImage.name}`,
    { type: 'image/png' },
  );

  return croppedImageFile;
};

export default makeNewImageFile;
