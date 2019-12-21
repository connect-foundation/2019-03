import React from 'react';

import StyledLink from '../components/StyledLink';

function textParser(content) {
  let isTag = false;
  let isHashTag = false;
  const result = Array.from(content).reduce(
    (acc, char) => {
      if (isTag && char === ' ') {
        isTag = false;
        return [...acc, char];
      }

      if (char !== '@' && char !== '#') {
        const { length } = acc;
        const last = acc[length - 1].concat(char);

        if (isHashTag && last.length > 45) {
          isTag = false;
          isHashTag = false;
          return [...acc, char];
        }

        return [...acc.slice(0, length - 1), last];
      }

      if (char === '#') {
        isHashTag = true;
      }

      isTag = true;
      return [...acc, char];
    },
    [''],
  );

  return result;
}

function linkConverter(content) {
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

export default function convertPlainTextToLinkedText(text) {
  const parseResult = textParser(text);
  return parseResult.map(content => linkConverter(content));
}
