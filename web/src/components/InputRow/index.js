import React from 'react';
import { InputRowWrapper, Label, Aside } from './styles';

function InputRow({ label, customComponent, rightComponent, required }) {
  const leftComponent = (
    <Aside>
      {label && (
        <Label required={required} htmlFor={`pep${label}`}>
          {label}
        </Label>
      )}
      {customComponent}
    </Aside>
  );

  return (
    <InputRowWrapper>
      {leftComponent}
      {rightComponent}
    </InputRowWrapper>
  );
}

export default React.memo(InputRow);
