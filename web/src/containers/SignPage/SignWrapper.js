import styled from 'styled-components';

const WIDTH = 350;

const SignWrapper = styled.div`
  width: ${WIDTH}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 16px;

  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.border};
`;

export default SignWrapper;
