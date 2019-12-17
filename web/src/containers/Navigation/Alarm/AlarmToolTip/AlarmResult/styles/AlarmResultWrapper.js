import styled from 'styled-components';

const AlarmResultWrapper = styled.div`
  /* Layout */
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Box */
  width: 400px;
  padding: 20px;
  border-bottom: ${({ isLast }) => (isLast ? 'none' : `1px solid lightgray`)};
`;

export default AlarmResultWrapper;
