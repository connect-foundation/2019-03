import React, { useState } from 'react';

import { MoreIcon, PostTopWrapper } from './styles';
import Profile from '../ProfileIcon';
import MoreModal from './MoreModal';
import StyledLink from '../StyledLink';

const PostTop = ({ writer, myInfo, postURL }) => {
  const [isVisible, setIsVisible] = useState(false);
  const clickMore = () => {
    setIsVisible(true);
  };

  return (
    <>
      <PostTopWrapper>
        <StyledLink to={`/${writer.username}`}>
          <div className="user">
            <Profile imgSrc={writer.profileImage} />
            <span className="username">{writer.username}</span>
          </div>
        </StyledLink>
        <div className="more">
          <MoreIcon onClick={clickMore} />
        </div>
      </PostTopWrapper>
      <MoreModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        writer={writer}
        myInfo={myInfo}
        post={postURL}
      />
    </>
  );
};
export default PostTop;
