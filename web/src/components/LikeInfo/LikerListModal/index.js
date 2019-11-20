import React from 'react';

import { Modal, LikerList, Header } from './styles';

const style = {
  width: '400px',
};

const LikerListModal = ({ likerList, onClick }) => {
  return (
    <Modal style={style} onClick={onClick}>
      <Header onClick={onClick} />
      <LikerList likerList={likerList} />
    </Modal>
  );
};

export default LikerListModal;
