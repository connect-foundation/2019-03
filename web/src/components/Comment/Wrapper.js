import styled, { css } from 'styled-components';

const buttonStyle = css`
  ${props => {
    const gray = props.theme.palette.gray_font;
    return css`
      color: ${gray};
      background: 0 0;
      border: 0;
      cursor: pointer;
      display: inline;
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
      margin-right: 16px;
      padding: 0;
    `;
  }}
`;

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

const StyledTime = styled.time`
  ${props => {
    const gray = props.theme.palette.gray_font;
    return css`
      color: ${gray};
    `;
  }}
  font-size: 15px;
  font-weight: 400;
  margin-right: 16px;
`;

const LikeButton = styled.button`
  ${buttonStyle}
`;

const ReplyButton = styled.button`
  ${buttonStyle}
`;

const ProfileWrapper = styled.div`
  margin-right: 18px;
`;

const BottomButtonGroup = styled.div`
  margin-top: 16px;
`;
export {
  StyledTime,
  LikeButton,
  ReplyButton,
  FlexBlock,
  ProfileWrapper,
  BottomButtonGroup,
};

export default Wrapper;
