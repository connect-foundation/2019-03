import React from 'react';

import { ContentWrapper } from './styles';
import StyledLink from '../../../../../../components/StyledLink';
import TimePassed from '../../../../../../components/TimePassed';
import { parseMainText, makeMainText } from '../../../../../../lib';

function Content({ post }) {
  const { writer, content, updatedAt } = post;
  const parseResult = parseMainText(content);

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
        <article>{parseResult.map(word => makeMainText(word))}</article>
      </main>
      <TimePassed updatedAt={updatedAt} />
    </ContentWrapper>
  );
}

export default Content;
