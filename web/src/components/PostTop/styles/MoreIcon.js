import styled from 'styled-components';
import icon from '../../../images/icon-1.png';

const MoreIcon = styled.span`
  /* Layout */
  display: inline-block;

  /* Box */
  width: 12.5px;
  height: 5px;

  /* Background */
  background-image: url(${icon});
  background-size: 100px;
  background-position: -126px 250px;

  /* Property */
  cursor: pointer;
`;

export default MoreIcon;
