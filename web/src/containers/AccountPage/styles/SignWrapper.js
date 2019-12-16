import styled from 'styled-components';

const WIDTH = 350;

const SignWrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Box */
  width: ${WIDTH}px;
  padding: 32px 16px;
  border: 1px solid ${({ theme }) => theme.palette.border};

  /* Background */
  background-color: ${({ theme }) => theme.palette.white};
`;

export default SignWrapper;
