import React from 'react';
import styled, { css } from 'styled-components';
import More from './More';
import icon from '../../images/icon-1.png';

const PostTop = styled.header`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${props => {
    const borderColor = props.theme.palette.border;
    return css`
      border: 1px solid ${borderColor};
    `;
  }}
  .username {
    margin-left: 10px;
  }
  .more span {
    display: inline-block;
    background-image: url(${icon});
    background-size: 100px;
    background-position: -125px 250px;
    width: 12.5px;
    height: 5px;
  }
`;

const Wrapper = ({ writer }) => {
  return (
    <PostTop>
      <div>
        <span>프사자리</span>
        <span className="username">{writer.username}</span>
      </div>
      <div className="more">
        <span />
        <More isFollow={writer.isFollow} />
      </div>
    </PostTop>
  );
};

export default Wrapper;
