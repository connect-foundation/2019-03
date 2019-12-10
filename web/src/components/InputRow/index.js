import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { InputRowWrapper, StyledLabel, StyledAside } from './styles';

function InputRow({ label, rowStyle, text, setText, inputType }) {
  let leftComponent;
  let rightComponent;
  switch (rowStyle) {
    case 'input':
      leftComponent = (
        <StyledAside>
          <StyledLabel htmlFor={`pep${label}`}>{label}</StyledLabel>
        </StyledAside>
      );
      rightComponent = (
        <Input
          id={`pep${label}`}
          value={text}
          onChange={e => setText(e.target.value)}
          type={inputType || 'text'}
        />
      );
      break;
    case 'button':
      leftComponent = <StyledAside />;
      rightComponent = (
        <Button type="submit" btnStyle="primary">
          {text}
        </Button>
      );
      break;

    default:
      leftComponent = <StyledAside />;
      break;
  }

  return (
    <InputRowWrapper>
      {leftComponent}
      {rightComponent}
    </InputRowWrapper>
  );
}

export default React.memo(InputRow);
