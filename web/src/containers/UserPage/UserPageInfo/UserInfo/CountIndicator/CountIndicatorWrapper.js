import styled from 'styled-components';

const CountIndicatorWrapper = styled.ul`
  /* Layout */
  display: flex;
  flex-direction: row;
  list-style: none;

  /* Box */
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  li {
    /* Layout */
    display: flex;
    display: row;

    /* Box */
    margin-right: 40px;

    /* Font */
    font-size: 16px;
  }
  li div {
    /* Layout */
    display: inline;
    vertical-align: baseline;

    /* Box */
    margin: 0;
    padding: 0;
    border: 0;
  }
  li > div > div {
    /* Font */
    font-weight: 600;
  }
`;

export default CountIndicatorWrapper;
