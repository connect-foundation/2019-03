import styled from 'styled-components';

const FileInput = styled.input.attrs({
  type: 'file',
  id: 'select_file',
  accept: 'image/x-png,image/gif,image/jpeg',
})`
  display: none;
`;

export default FileInput;
