import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FONT_SIZE = 14;

const UserLink = styled(Link)`
  text-decoration: none;

  font-weight: 600;
  font-size: ${FONT_SIZE}px;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default UserLink;
