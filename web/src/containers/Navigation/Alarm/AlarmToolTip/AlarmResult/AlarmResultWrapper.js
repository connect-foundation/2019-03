import styled from 'styled-components';

const AlarmResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: ${({ isLast }) => (isLast ? 'none' : `1px solid lightgray`)};
  width: 400px;
  align-items: center;
`;

export default AlarmResultWrapper;
