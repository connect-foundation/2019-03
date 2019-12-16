import styled from 'styled-components';

const FileSelectLabel = styled.label`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 9px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.palette.blue};
  color: ${({ theme }) => theme.palette.white};
`;

export default FileSelectLabel;
