import styled from 'styled-components';

const ResultInfo = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Box*/
  margin-left: 20px;

  .option {
    /* Box */
    margin-top: 2px;

    /* Font */
    font-size: 0.8em;
    color: ${({ theme }) => theme.palette.gray_font};
  }
`;

export default ResultInfo;
