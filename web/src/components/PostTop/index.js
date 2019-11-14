import React, { useState } from 'react';
import Wrapper from './Wrapper';
import MoreIcon from './MoreIcon';
import Profile from '../ProfileIcon';
import StyledLink from './StyledLink';
import MoreModal from './MoreModal';

const PostTop = ({ writer }) => {
  const [moreModal, setMoreModal] = useState(false);
  const clickMore = () => {
    setMoreModal(true);
  };

  return (
    <>
      <Wrapper>
        <StyledLink to={`/${writer.username}`}>
          <div className="user">
            <Profile />
            <span className="username">{writer.username}</span>
          </div>
        </StyledLink>
        <div className="more">
          <MoreIcon onClick={clickMore} />
        </div>
      </Wrapper>
      <MoreModal visible={moreModal} />
    </>
  );
};

export default PostTop;
