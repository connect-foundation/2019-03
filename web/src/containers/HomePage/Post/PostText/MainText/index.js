import React from 'react';

import {
  Content as MainTextContent,
  TextWrapper as MainTextWrapper,
  TextMoreButton as MaintextMoreButton,
  Writer,
} from '../styles';
import { useText as useMainText } from '../hooks';
import { parseMainText, makeMainText } from '../../../../../lib';

const MainText = ({ writer, mainText }) => {
  const { username } = writer;
  const [isFold, mainTextRef, onUnfoldMainText] = useMainText();
  const parseResult = parseMainText(mainText);

  return (
    <MainTextWrapper style={{ marginBottom: '4px' }}>
      <Writer to={`/${username}`}>{username}</Writer>
      <MainTextContent isFold={isFold} ref={mainTextRef}>
        {parseResult.map(content => makeMainText(content))}
      </MainTextContent>
      {isFold && (
        <MaintextMoreButton onClick={onUnfoldMainText} isFold>
          더보기
        </MaintextMoreButton>
      )}
    </MainTextWrapper>
  );
};

export default MainText;
