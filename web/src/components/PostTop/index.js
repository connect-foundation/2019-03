import React from 'react';
import Wrapper from './Wrapper';
import MoreIcon from './MoreIcon';

const PostTop = ({ writer }) => {
  return (
    <Wrapper>
      <div>
        <span>프사자리</span>
        <span className="username">{writer.username}</span>
      </div>
      <div className="more">
        <MoreIcon />
      </div>
    </Wrapper>
  );
};

export default PostTop;
