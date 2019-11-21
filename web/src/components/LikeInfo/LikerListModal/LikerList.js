import React from 'react';
import Liker from './Liker';

const LikerList = ({ likerList }) => {
  const likerComponents = likerList.map(liker => (
    <Liker key={liker.username} liker={liker} />
  ));

  return <>{likerComponents}</>;
};

export default LikerList;
