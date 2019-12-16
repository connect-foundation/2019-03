import styled, { css } from 'styled-components';

const focused = css`
  ${({ isFocused }) => {
    return (
      isFocused &&
      css`
        font-weight: 700;
        border-left: solid 2px black;
        &:hover {
          background-color: white;
          border-left: solid 2px black;
        }
      `
    );
  }}
`;

const ItemWrapper = styled.li`
  /* Box */
  border-left: solid 2px transparent;

  /* Property */
  &:hover {
    background-color: ${({ theme }) => theme.palette.gray_bright};
    border-left: solid 2px ${({ theme }) => theme.palette.border};
  }

  /* Other */
  ${focused}
`;
export default ItemWrapper;
