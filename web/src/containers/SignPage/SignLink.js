import styled from 'styled-components';
import StyledLink from '../../components/StyledLink';

const SignLink = styled(StyledLink)`
  &::before {
    content: ${({ issignin }) =>
      issignin ? `"계정이 없으신가요?"` : `"계정이 있으신가요?"`};
    color: ${({ theme }) => theme.palette.gray_font};
    margin-right: 8px;
    font-weight: normal;
  }
`;

export default SignLink;
