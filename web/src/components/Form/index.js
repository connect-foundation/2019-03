import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  position: relative;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const Form = ({ children, ...rest }) => (
  <StyledForm {...rest}>{children}</StyledForm>
);

export default Form;
