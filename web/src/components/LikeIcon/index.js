import React from 'react';
import Icon from '../Icon';

const LikeIcon = ({ isFull, ...rest }) => {
  return (
    <Icon
      name={isFull ? 'fullHeart' : 'emptyhHeart'}
      ratio={5}
      style={{ marginTop: '4px' }}
      {...rest}
    />
  );
};

export default LikeIcon;
