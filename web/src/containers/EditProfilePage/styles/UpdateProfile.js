import styled from 'styled-components';

const UpdateProfile = styled.label`
  /* Box */
  margin: 0;

  /* Font */
  font-size: 0.8rem;
  font-weight: 900;
  color: ${({ theme }) => theme.palette.blue};

  /* Other */
  cursor: pointer;
`;

export default UpdateProfile;
