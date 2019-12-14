import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { LIKER_LIST } from '../../../queries';
import { Modal, Liker, LikerListWapper, Header } from './styles';
import Spinner from '../../Spinner';

const ModalStyle = {
  width: '400px',
};

const LikerListModal = ({ postId, onClick }) => {
  const [getLikerList, { data }] = useLazyQuery(LIKER_LIST);
  useEffect(() => {
    getLikerList({ variables: { postId } });
  }, [getLikerList, postId]);

  const likerListView = data ? (
    data.likerList.map(liker => <Liker key={liker.id} liker={liker} />)
  ) : (
    <Spinner />
  );

  return (
    <Modal style={ModalStyle} onClick={onClick}>
      <Header onClick={onClick} />
      <LikerListWapper>{likerListView}</LikerListWapper>
    </Modal>
  );
};

export default LikerListModal;
