import styled, { css } from 'styled-components';

const GrayButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.palette.gray_font};
    background: 0 0;
    border: 0;
    cursor: pointer;
    display: inline;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    margin-right: 16px;
    padding: 0;
  `}
`;

export default GrayButton;
