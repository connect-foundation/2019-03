import React from 'react';

import StyledLink from '../../../../../../components/StyledLink';

export function parseMainText(content) {
  let isTag = false;
  const result = Array.from(content).reduce(
    (acc, char) => {
      if (isTag && char === ' ') {
        isTag = false;
        return [...acc, char];
      }

      if (char !== '@' && char !== '#') {
        const { length } = acc;
        const last = acc[length - 1].concat(char);
        return [...acc.slice(0, length - 1), last];
      }

      isTag = true;
      return [...acc, char];
    },
    [''],
  );

  return result;
}

export function makeMainText(content) {
  if (content.startsWith('@')) {
    const username = content.substring(1);
    return (
      <StyledLink
        style={{ color: '#0d4296' }}
        key={username}
        to={`/${username}`}
      >
        {content}
      </StyledLink>
    );
  }

  if (content.startsWith('#')) {
    const hashtag = content.substring(1);
    return (
      <StyledLink
        style={{ color: '#0d4296' }}
        key={hashtag}
        to={`/h/${hashtag}`}
      >
        {content}
      </StyledLink>
    );
  }

  return content;
}
