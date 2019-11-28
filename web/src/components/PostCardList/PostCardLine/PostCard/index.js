import React from 'react';

import StyledLink from '../../../StyledLink';
import { StyledPostCard, MarginalPostCard } from './styles';

const PostCard = ({ isLast }) => {
  return (
    <MarginalPostCard isLast={isLast}>
      <StyledLink to="/">
        <StyledPostCard />
      </StyledLink>
    </MarginalPostCard>
  );
};

export default PostCard;
