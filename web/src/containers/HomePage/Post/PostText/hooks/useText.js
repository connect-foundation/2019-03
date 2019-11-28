import { useState, useRef, useEffect } from 'react';

const useText = () => {
  const [isFold, setIsFold] = useState(true);
  const onUnfoldText = () => {
    setIsFold(!isFold);
  };

  const textRef = useRef(null);
  useEffect(() => {
    const { offsetWidth, scrollWidth } = textRef.current;
    const isOverflow = offsetWidth < scrollWidth;
    setIsFold(isOverflow);
  }, []);

  return [isFold, textRef, onUnfoldText];
};

export default useText;
