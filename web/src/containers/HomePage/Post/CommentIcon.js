import React from 'react';

import Icon from '../../../components/Icon';
import StyledLink from '../../../components/StyledLink';

const COMMENT_POS_X = -520;
const COMMENT_POS_Y = -248;
const LinkStyle = {
  height: '25px',
};

const CommentIcon = ({ post, ratio }) => {
  const { postHash } = post;

  return (
    <StyledLink to={`/p/${postHash}`} style={LinkStyle}>
      <Icon ratio={ratio} posX={COMMENT_POS_X} posY={COMMENT_POS_Y} />
    </StyledLink>
  );
};

CommentIcon.defaultProps = {
  ratio: 5,
};

export default CommentIcon;
