import React from 'react';

import { Modal, ModalHeader, UserItemList } from './styles';

const userList = [
  {
    username: 'jaehyeonkim19',
    name: '김재현',
  },
  {
    username: '_so__02',
    name: '정소영',
  },
  {
    username: 'jh__nam',
    name: '남정호',
  },
  {
    username: 'zxcvzxcv',
    name: '전형진',
  },
];

const modalStyle = {
  width: '400px',
};

const UserListModal = ({ onClick }) => {
  const content = (
    <>
      <ModalHeader />
      <UserItemList userList={userList} />
    </>
  );

  return <Modal content={content} onClick={onClick} style={modalStyle} />;
};

export default UserListModal;
