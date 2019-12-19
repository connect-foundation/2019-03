import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Modal from '../Modal';
import Spinner from '../Spinner';
import NoResult from './NoResult';
import UserListItem from './UserListItem';
import { ModalHeader, ModalContent } from './styles';

const UserListModal = ({ myId, onClick, listName, query, userId }) => {
  const queryOption = {
    variables: { myId, userId },
    fetchPolicy: 'cache-and-network',
  };
  const { data, loading, error } = useQuery(query, queryOption);
  const spinnerSize = 100;
  let content = <NoResult listName={listName} />;
  if (error) content = <div>다시 시도해주세요.</div>;
  if (loading) content = <Spinner size={spinnerSize} />;
  if (data) {
    const DataKeys = Object.keys(data);
    if (data[DataKeys[0]].length !== 0)
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
