import React, { useState, useEffect, useCallback } from 'react';
import _ from 'underscore';
import Icon from '../Icon';

const LikeIcon = ({ isLike, likeBtnClickHandler }) => {
  const [isFull, setFull] = useState(false);

  const lazyFetch = useCallback(_.debounce(likeBtnClickHandler, 300), []);

  const toggleHeart = () => {
    setFull(!isFull);
    if (isFull === isLike) return;
    lazyFetch();
  };

  useEffect(() => {
    if (!isLike) return;
    setFull(true);
  }, [isLike]);

  return (
    <Icon
      name={isFull ? 'fullHeart' : 'emptyhHeart'}
      ratio={5}
      style={{ marginTop: '4px' }}
      onClick={toggleHeart}
    />
  );
};

LikeIcon.defaultProps = {
  likeBtnClickHandler: () => {},
};

export default LikeIcon;
