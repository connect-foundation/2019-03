import styled from 'styled-components';

const StyledSection = styled.section`
  margin: 10px;
  width: 90%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 600px) {
    width: 600px;
    justify-content: flex-end;
  }
`;

export default StyledSection;
