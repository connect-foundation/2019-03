import React from 'react';

import { ContentWrapper } from './styles';
import StyledLink from '../../../../../../components/StyledLink';
import TimePassed from '../../../../../../components/TimePassed';
import { convertPlainTextToLinkedText } from '../../../../../../lib';

function Content({ post }) {
  const { writer, content, updatedAt } = post;

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
        <article>{convertPlainTextToLinkedText(content)}</article>
      </main>
      <TimePassed updatedAt={updatedAt} />
    </ContentWrapper>
  );
}

export default Content;
