import React from 'react';

import Wrapper, { FlexBlock, ProfileWrapper } from './Wrapper';
import ProfileIcon from '../ProfileIcon';

const PostText = ({ user, content, updatedAt }) => {
  return (
    <Wrapper>
      <FlexBlock>
        <FlexBlock>
          <ProfileWrapper>
            <ProfileIcon />
          </ProfileWrapper>
          <div>
            <span>
              <h3>
                <a href="#">{user.username}</a>
              </h3>
              <article>{content}</article>
            </span>
          </div>
        </FlexBlock>
      </FlexBlock>
    </Wrapper>
  );
};

export default PostText;
