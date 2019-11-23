import { useState, useRef, useEffect } from 'react';

const useComment = () => {
  const [isFold, setIsFold] = useState(true);
  const onUnfoldComment = () => {
    setIsFold(!isFold);
  };

  const comment = useRef(null);
  useEffect(() => {
    const { offsetWidth, scrollWidth } = comment.current;
    const isOverflow = offsetWidth < scrollWidth;
    setIsFold(isOverflow);
  }, []);

  return [isFold, comment, onUnfoldComment];
};

export default useComment;
