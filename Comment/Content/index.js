import React from 'react';

import { ContentWrapper, UpdatedTime, GrayButton } from './styles';
import StyledLink from '../../StyledLink';

function Content({ user, content, likerCount }) {
  return (
    <ContentWrapper>
      <main>
        <h3>
          <StyledLink
            to={`/${user.username}`}
            style={{ display: 'inline-block' }}
          >
            {user.username}
          </StyledLink>
        </h3>
        <article>{content}</article>
      </main>
      <UpdatedTime>5h</UpdatedTime>
      <GrayButton>{likerCount} like</GrayButton>
      <GrayButton>Reply</GrayButton>
    </ContentWrapper>
  );
}

export default Content;
