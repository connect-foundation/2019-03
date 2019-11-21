import React from 'react';

import { ContentWrapper, StyledTime, GrayButton } from './styles';
import StyledLink from '../../StyledLink';

function Content({ user, content, likerCount }) {
  return (
    <ContentWrapper>
      <div>
        <h3>
          <StyledLink
            to={`/${user.username}`}
            style={{ display: 'inline-block' }}
          >
            {user.username}
          </StyledLink>
        </h3>
        <article>{content}</article>
      </div>
      <StyledTime>5h</StyledTime>
      <GrayButton>{likerCount} like</GrayButton>
      <GrayButton>Reply</GrayButton>
    </ContentWrapper>
  );
}

export default Content;
