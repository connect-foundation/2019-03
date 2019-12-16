import styled from 'styled-components';
import StyledLink from '../../../components/StyledLink';

const SignLink = styled(StyledLink)`
  &::before {
    /* Box */
    margin-right: 8px;

    /* Font */
    font-weight: normal;
    color: ${({ theme }) => theme.palette.gray_font};

    /* Other */
    content: ${({ issignin }) =>
      issignin ? `"계정이 없으신가요?"` : `"계정이 있으신가요?"`};
  }
`;

export default SignLink;
