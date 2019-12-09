import React from 'react';
import { Backdrop, SpinnerWrapper } from './styles';
import Spinner from '../Spinner';

const defaultSizeOfSpinner = 20;

function Loading({ size = { defaultSizeOfSpinner } }) {
  return (
    <Backdrop>
      <SpinnerWrapper>
        <Spinner size={size} />
      </SpinnerWrapper>
    </Backdrop>
  );
}

export default Loading;
