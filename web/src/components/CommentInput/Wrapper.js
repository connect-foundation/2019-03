import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  height: 56px;
  input {
    border: none;
  }
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
