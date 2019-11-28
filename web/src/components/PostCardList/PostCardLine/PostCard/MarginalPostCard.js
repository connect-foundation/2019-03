import styled, { css } from 'styled-components';

const MarginalPostCard = styled.div`
  ${({ isLast }) =>
    !isLast &&
    css`
      margin-right: 28px;
    `}
`;

export default MarginalPostCard;
