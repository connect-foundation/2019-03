import styled from 'styled-components';

const ResultInfo = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  .option {
    margin-top: 2px;
    font-size: 0.8em;
    color: ${({ theme }) => theme.palette.gray_font};
  }
`;

export default ResultInfo;
