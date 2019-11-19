import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserLink = styled(Link)`
  line-height: 25px;
  font-weight: 600;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export default props => <UserLink {...props} />;
