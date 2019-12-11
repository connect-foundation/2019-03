import React, { useState, useEffect } from 'react';
import { ErrorWrapper, ErrorImage } from './styles';

const Error = ({ status }) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    if (status === 404) {
      setImage('https://kr.object.ncloudstorage.com/youngstargram/404.png');
    }
    if (status === 500) {
      setImage('https://kr.object.ncloudstorage.com/youngstargram/500.png');
    }
  }, [status]);

  return (
    <ErrorWrapper>
      <ErrorImage src={image} alt="죄송합니다." />
    </ErrorWrapper>
  );
};

Error.defaultProps = {
  status: 404,
};

export default Error;
