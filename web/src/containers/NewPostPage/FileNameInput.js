import styled from 'styled-components';

const FileNameInput = styled.input`
  display: inline-flex;
  outline: none;
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 4px;
  padding: 5px 9px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.palette.white};
  margin-right: 10px;
  vertical-align: middle;
`;

export default FileNameInput;
