import React from 'react';

import { ContentWrapper, StyledTime } from './styles';
import StyledLink from '../../../../../../components/StyledLink';

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
      <StyledTime>5h</StyledTime>
    </ContentWrapper>
  );
}

export default Content;
