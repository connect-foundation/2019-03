import React from 'react';

import Wrapper from './Wrapper';
import MoreIcon from './MoreIcon';
import Profile from '../ProfileIcon';
import StyledLink from './StyledLink';

const PostTop = ({ writer }) => {
  return (
    <Wrapper>
      <StyledLink to={`/${writer.username}`}>
        <div className="user">
          <Profile />
          <span className="username">{writer.username}</span>
        </div>
      </StyledLink>
      <div className="more">
        <MoreIcon />
      </div>
    </Wrapper>
  );
};

export default PostTop;
