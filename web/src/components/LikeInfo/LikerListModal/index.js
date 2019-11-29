import React from 'react';

import { Modal, Liker, LikerListWapper, Header } from './styles';

const ModalStyle = {
  width: '400px',
};

const LikerListModal = ({ likerList, onClick }) => {
  return (
    <Modal style={ModalStyle} onClick={onClick}>
      <Header onClick={onClick} />
      <LikerListWapper>
        {likerList.map(liker => (
          <Liker key={liker.id} liker={liker} />
        ))}
      </LikerListWapper>
    </Modal>
  );
};

export default LikerListModal;
