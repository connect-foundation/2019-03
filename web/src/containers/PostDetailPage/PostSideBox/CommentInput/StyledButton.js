import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  ${props => {
    const { disabled } = props;
    const { blue } = props.theme.palette;
    return css`
      font-weight: 600;
      color: ${blue};
      background: 0 0;
      border: 0;
      padding: 0;
      opacity: ${disabled ? 0.5 : 1};
    `;
  }}
`;

export default StyledButton;
