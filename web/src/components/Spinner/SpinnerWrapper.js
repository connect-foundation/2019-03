import styled, { css } from 'styled-components';

const SpinnerWrapper = styled.div`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}
  position: relative;
`;

export default SpinnerWrapper;
