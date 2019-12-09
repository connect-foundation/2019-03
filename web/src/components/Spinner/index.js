import React from 'react';
import { Spinner, SpinnerWrapper } from './styles';

const defaultSizeOfSpinner = 20;

function Spin({ size = defaultSizeOfSpinner }) {
  return (
    <SpinnerWrapper size={size}>
      <Spinner size={size} />
    </SpinnerWrapper>
  );
}

export default Spin;
