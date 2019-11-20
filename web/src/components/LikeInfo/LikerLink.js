import React from 'react';
import styled from 'styled-components';
import StyledLink from '../StyledLink';

const LikerLink = styled(StyledLink)`
  line-height: 25px;
  font-weight: 600;
`;

export default ({ children, ...props }) => (
  <LikerLink {...props}>{children}</LikerLink>
);
