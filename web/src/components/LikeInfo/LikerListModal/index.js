import React from 'react';

import { Modal, LikerList, Header } from './styles';

const ModalStyle = {
  width: '400px',
};

const LikerListModal = ({ likerList, onClick }) => {
  return (
    <Modal style={ModalStyle} onClick={onClick}>
      <Header onClick={onClick} />
      <LikerList likerList={likerList} />
    </Modal>
  );
};

export default LikerListModal;
