import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 5px;
  outline: none;
  width: 400px;
  height: 20px;
  padding: 10px;
`;

function Input({ children, ...rest }) {
  return <StyledInput {...rest}>{children}</StyledInput>;
}

export default Input;
