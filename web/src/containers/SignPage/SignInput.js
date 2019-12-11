import styled from 'styled-components';

const SignInput = styled.input`
  width: 80%;
  flex: 0 0 20px;
  padding: 8px 0px 8px 8px;
  box-sizing: border-box;

  outline: none;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.gray_background};

  & + & {
    margin-top: 16px;
  }

  &:focus {
    border: 1px solid gray;
  }
`;

export default SignInput;
