import React, { useState } from 'react';

import { MoreIcon, PostTopWrapper, MoreIconWrapper } from './styles';
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
            <Profile imageURL={writer.profileImage} />
            <span className="username">{writer.username}</span>
          </div>
        </StyledLink>
        <MoreIconWrapper onClick={clickMore}>
          <MoreIcon />
        </MoreIconWrapper>
      </PostTopWrapper>
      <MoreModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        writer={writer}
        myInfo={myInfo}
        postURL={postURL}
      />
    </>
  );
};
export default PostTop;
