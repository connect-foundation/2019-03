import React from 'react';

import Icon from '../../../../components/Icon';
import StyledLink from '../../../../components/StyledLink';

const LinkStyle = {
  height: '25px',
};

const CommentIcon = ({ postURL }) => {
  return (
    <StyledLink to={`/p/${postURL}`} style={LinkStyle}>
      <Icon name="comment" />
    </StyledLink>
  );
};

CommentIcon.defaultProps = {
  ratio: 5,
};

export default CommentIcon;
