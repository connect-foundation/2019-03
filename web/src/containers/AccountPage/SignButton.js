import styled from 'styled-components';

const SignButton = styled.button`
  width: 80%;
  padding: 8px 12px;
  margin: 16px 0px;

  font-weight: 600;

  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.blue};

  cursor: pointer;
`;

export default SignButton;
