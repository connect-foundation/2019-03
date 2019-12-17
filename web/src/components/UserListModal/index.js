import React from 'react';

import Modal from '../Modal';
import Spinner from '../Spinner';

import UserListItem from './UserListItem';
import { ModalHeader, ModalContent } from './styles';

const UserListModal = ({
  myId,
  isVisible,
  onClick,
  listName,
  lazyQueryResult: { loading, data, error },
}) => {
  const spinnerSize = 100;
  let content = <li>{`${listName}의 `}내용이 없습니다.</li>;
  if (!isVisible) return <></>;
  if (loading) content = <Spinner size={spinnerSize} />;
  if (error) content = <div>다시 시도해주세요.</div>;
  if (data) {
    const DataKeys = Object.keys(data);
    content = data[DataKeys[0]].map(user => (
      <UserListItem userInfo={user} myId={myId} key={user.id} />
    ));
  }
  return (
    <Modal onClick={onClick}>
      <ModalHeader>
        <h1>{listName}</h1>
      </ModalHeader>
      <ModalContent>
        <ul>{content}</ul>
      </ModalContent>
    </Modal>
  );
};

export default UserListModal;
