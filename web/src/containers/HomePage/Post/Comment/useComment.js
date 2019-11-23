import { useState, useRef, useEffect } from 'react';

const useComment = () => {
  const [isFold, setIsFold] = useState(true);
  const onUnfoldComment = () => {
    setIsFold(!isFold);
  };

  const commentRef = useRef(null);
  useEffect(() => {
    const { offsetWidth, scrollWidth } = commentRef.current;
    const isOverflow = offsetWidth < scrollWidth;
    setIsFold(isOverflow);
  }, []);

  return [isFold, commentRef, onUnfoldComment];
};

export default useComment;
