import React from 'react';
import Wrapper from './Wrapper';
import MoreIcon from './MoreIcon';
import Profile from '../ProfileIcon';

const PostTop = ({ writer }) => {
  return (
    <Wrapper>
      <div className="user">
        <Profile />
        <span className="username">{writer.username}</span>
      </div>
      <div className="more">
        <MoreIcon />
      </div>
    </Wrapper>
  );
};

export default PostTop;
