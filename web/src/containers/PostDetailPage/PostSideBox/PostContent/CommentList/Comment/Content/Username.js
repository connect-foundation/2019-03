import React from 'react';
import StyledLink from '../../../../../../../components/StyledLink';

const Username = ({ writer }) => (
  <h3>
    <StyledLink to={`/${writer.username}`} style={{ display: 'inline-block' }}>
      {writer.username}
    </StyledLink>
  </h3>
);

export default Username;
