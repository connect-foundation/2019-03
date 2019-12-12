import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 80%;
  flex: 0 0 20px;
  padding: 8px 0px 8px 8px;
  box-sizing: border-box;

  outline: none;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.gray_background};

  & + & {
    margin-top: 16px;
  }

  &:focus {
    border: 1px solid gray;
  }
`;

const onLimitLength = ({ target }, limit, setValue) => {
  const input = target;
  const { value } = input;

  if (value.length > limit) {
    setValue(value.substring(0, limit));
    return;
  }

  setValue(value);
};

const SignInput = ({ limit, ...rest }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => onLimitLength(e, limit, setValue), [limit]);

  return <Input {...rest} onChange={onChange} value={value} />;
};

export default SignInput;
