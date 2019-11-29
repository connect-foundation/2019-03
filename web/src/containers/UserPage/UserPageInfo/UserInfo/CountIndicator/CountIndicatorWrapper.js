import styled from 'styled-components';

const CountIndicatorWrapper = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  li {
    font-size: 16px;
    margin-right: 40px;
    display: flex;
    display: row;
  }
  li div {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    display: inline;
  }
  li > div > div {
    font-weight: 600;
  }
`;

export default CountIndicatorWrapper;
