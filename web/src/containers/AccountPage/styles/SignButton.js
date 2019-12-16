import styled from 'styled-components';

const SignButton = styled.button`
  /* Box */
  width: 80%;
  margin: 16px 0px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;

  /* Background */
  color: ${({ theme }) => theme.palette.white};

  /* Font */
  font-weight: 600;
  background-color: ${({ theme }) => theme.palette.blue};

  /* Other */
  cursor: pointer;
`;

export default SignButton;
