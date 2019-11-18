import React from 'react';

import Wrapper, {
  FlexBlock,
  StyledTime,
  LikeButton,
  ReplyButton,
  ProfileWrapper,
  BottomButtonGroup,
} from './Wrapper';
import ProfileIcon from '../ProfileIcon';
import LikeIcon from '../LikeIcon';

const Comment = ({ user, content, updatedAt, likers, commentId }) => {
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
            <BottomButtonGroup>
              <StyledTime>5h</StyledTime>
              <LikeButton>{likers} like</LikeButton>
              <ReplyButton>Reply</ReplyButton>
            </BottomButtonGroup>
          </div>
        </FlexBlock>
        <LikeIcon />
      </FlexBlock>
    </Wrapper>
  );
};

export default Comment;
