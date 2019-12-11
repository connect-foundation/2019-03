import React from 'react';
import { Backdrop } from './styles';
import Spinner from '../Spinner';

const defaultSizeOfSpinner = 20;

function Loading({ size = { defaultSizeOfSpinner } }) {
  return (
    <Backdrop>
      <Spinner size={size} />
    </Backdrop>
  );
}

export default Loading;
