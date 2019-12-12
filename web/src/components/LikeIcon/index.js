import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

const LikeIcon = ({ isLike, likeBtnClickHandler }) => {
  const [isFull, setFull] = useState(false);
  useEffect(() => {
    if (!isLike) return;
    setFull(true);
  }, [isLike]);

  const toggleHeart = () => {
    setFull(!isFull);
    if (!likeBtnClickHandler) return;
    likeBtnClickHandler(isLike);
  };

  return (
    <Icon
      name={isFull ? 'fullHeart' : 'emptyhHeart'}
      ratio={5}
      style={{ marginTop: '4px' }}
      onClick={toggleHeart}
    />
  );
};
export default LikeIcon;
