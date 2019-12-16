import React from 'react';
import { InputRowWrapper, StyledLabel, StyledAside } from './styles';

function InputRow({ label, customComponent, rightComponent, required }) {
  const leftComponent = (
    <StyledAside>
      {label && (
        <StyledLabel required={required} htmlFor={`pep${label}`}>
          {label}
        </StyledLabel>
      )}
      {customComponent}
    </StyledAside>
  );

  return (
    <InputRowWrapper>
      {leftComponent}
      {rightComponent}
    </InputRowWrapper>
  );
}

export default React.memo(InputRow);
