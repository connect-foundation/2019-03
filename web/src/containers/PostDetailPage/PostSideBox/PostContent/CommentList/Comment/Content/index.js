import React from 'react';

import { ContentWrapper } from './styles';
import StyledLink from '../../../../../../../components/StyledLink';
import TimePassed from '../../../../../../../components/TimePassed';

function Content({ comment }) {
  const { writer, content, updatedAt } = comment;
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
      <TimePassed updatedAt={updatedAt} />
    </ContentWrapper>
  );
}

export default Content;
