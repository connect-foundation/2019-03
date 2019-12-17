import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  /* Box */
  width: 80%;
  padding: 8px 0px 8px 8px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 5px;
  outline: none;
  flex: 0 0 20px;
  & + & {
    margin-top: 16px;
  }

  /* Backgroud */
  background-color: ${({ theme }) => theme.palette.gray_background};

  /* Other */
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
