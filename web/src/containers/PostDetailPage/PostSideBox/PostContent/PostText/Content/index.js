import React from 'react';

import { ContentWrapper, StyledTime } from './styles';
import StyledLink from '../../../../../../components/StyledLink';

function Content({ post }) {
  const { writer, content } = post;
  return (
    <ContentWrapper>
      <main>
        <h3>
          <StyledLink
            to={`/${writer.username}`}
            style={{ display: 'inline-block' }}
          >
            {writer.username}
          </StyledLink>
        </h3>
        <article>{content}</article>
      </main>
      <StyledTime>5h</StyledTime>
    </ContentWrapper>
  );
}

export default Content;
