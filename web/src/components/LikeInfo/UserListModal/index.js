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

const UserListModal = ({ onClick: onCancel }) => {
  const content = (
    <>
      <ModalHeader onClick={onCancel} />
      <UserItemList userList={userList} />
    </>
  );

  return <Modal content={content} onClick={onCancel} style={modalStyle} />;
};

export default UserListModal;
