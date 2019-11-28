import React from 'react';

import { ContentWrapper, UpdatedTime, GrayButton } from './styles';
import StyledLink from '../../../../../../../components/StyledLink';

function Content({ writer, content, likerCount }) {
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
      <UpdatedTime>5h</UpdatedTime>
      <GrayButton>{likerCount} like</GrayButton>
      <GrayButton>Reply</GrayButton>
    </ContentWrapper>
  );
}

export default Content;
