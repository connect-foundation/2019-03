import React from 'react';

import StyledLink from '../../../StyledLink';
import { StyledPostCard, MarginalPostCard } from './styles';

const PostCard = ({ postInfo }) => {
  const { postURL, imageURL } = postInfo;
  return (
    <MarginalPostCard>
      <StyledLink to={`/p/${postURL}`}>
        <StyledPostCard imageURL={imageURL} />
      </StyledLink>
    </MarginalPostCard>
  );
};

export default PostCard;
