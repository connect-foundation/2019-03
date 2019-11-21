import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  flex: 0 0 56px;
  font-size: 14px;
  display: flex;
  align-items: center;
  input {
    border: none;
  }
  ${({ theme }) => {
    const borderColor = theme.palette.border;
    return css`
      border-top: 1px solid ${borderColor};
    `;
  }}
  padding: 0 16px;
`;

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  ${props => {
    const { blue } = props.theme.palette;
    return css`
      font-weight: 600;
      color: ${blue};
      background: 0 0;
      border: 0;
      padding: 0;
    `;
  }}
`;

const StyledInput = styled.input`
  outline: none;
`;
export { FlexWrapper, StyledButton, StyledInput };
export default Wrapper;
