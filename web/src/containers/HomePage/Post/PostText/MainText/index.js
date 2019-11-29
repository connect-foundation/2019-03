import React from 'react';

import {
  Content as MainTextContent,
  TextWrapper as MainTextWrapper,
  TextMoreButton as MaintextMoreButton,
  Writer,
} from '../styles';
import { useText as useMainText } from '../hooks';

const MainText = ({ writer, mainText }) => {
  const { username } = writer;
  const [isFold, mainTextRef, onUnfoldMainText] = useMainText();

  return (
    <MainTextWrapper style={{ marginBottom: '4px' }}>
      <Writer to={`/${username}`}>{username}</Writer>
      <MainTextContent isFold={isFold} ref={mainTextRef}>
        {mainText}
      </MainTextContent>
      {isFold && (
        <MaintextMoreButton onClick={onUnfoldMainText}>
          더보기
        </MaintextMoreButton>
      )}
    </MainTextWrapper>
  );
};

export default MainText;
