import React from 'react';

import {
  PostTextWrapper,
  FlexBlock,
  ProfileWrapper,
  StyledTime,
  BottomButtonGroup,
} from './styles';

import ProfileIcon from '../../../../components/ProfileIcon';

const PostText = ({ user, content, updatedAt }) => {
  return (
    <PostTextWrapper>
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
            <BottomButtonGroup>
              <StyledTime>5h</StyledTime>
            </BottomButtonGroup>
          </div>
        </FlexBlock>
      </FlexBlock>
    </PostTextWrapper>
  );
};

export default PostText;
