import { useReducer, useCallback } from 'react';
import { readFile } from '../../../utils/fileUtils';

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

const useImage = initalState => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const inputImage = async e => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch({ type: 'INPUT_IMAGE', value: e.target.files[0] });

      const originalImageDataUrl = await readFile(e.target.files[0]);
      dispatch({ type: 'INPUT_IMAGE_URL', value: originalImageDataUrl });
    }
  };

  const onCropComplete = useCallback(
    (croppedArea, currentcroppedAreaPixels) => {
      dispatch({ type: 'INPUT_CROPPED_AREA', value: currentcroppedAreaPixels });
    },
    [],
  );

  const changeCrop = crop => {
    dispatch({ type: 'CHANGE_CROP', value: crop });
  };

  const changeZoom = zoom => {
    dispatch({ type: 'CHANGE_ZOOM', value: zoom });
  };

  const changeSliderZoom = (e, zoom) => {
    dispatch({ type: 'CHANGE_ZOOM', value: zoom });
  };

  return [
    state,
    inputImage,
    onCropComplete,
    changeCrop,
    changeZoom,
    changeSliderZoom,
  ];
};

export default useImage;
