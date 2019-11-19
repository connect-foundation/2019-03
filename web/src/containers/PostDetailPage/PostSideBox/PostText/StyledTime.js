import styled, { css } from 'styled-components';

const StyledTime = styled.time`
  ${props => {
    const gray = props.theme.palette.gray_font;
    return css`
      color: ${gray};
    `;
  }}
  font-size: 15px;
  font-weight: 400;
  margin-right: 16px;
`;

export default StyledTime;
