import styled from 'styled-components';

const Wrapper = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 12px 16px 0px 16px;
  box-sizing: border-box;
  & + & {
    margin-top: 16px;
  }
  span {
    font-size: 14px;
    h3 {
      font-weight: 600;
      display: inline;
      margin-right: 5px;
      a {
        text-decoration: none;
        color: black;
      }
    }
    article {
      display: inline;
    }
  }
`;

const FlexBlock = styled.div`
  display: flex;
`;

const ProfileWrapper = styled.div`
  margin-right: 18px;
`;

export { FlexBlock, ProfileWrapper };

export default Wrapper;
