import styled from 'styled-components';

const UpdatedTime = styled.span`
  display: inline-block;

  color: ${({ theme }) => theme.palette.gray_font};
  font-size: 0.8rem;

  margin-left: 15px;
`;

export default UpdatedTime;
