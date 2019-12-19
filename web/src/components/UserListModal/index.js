import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List } from 'react-virtualized';

import Modal from '../Modal';
import Spinner from '../Spinner';
import NoResult from './NoResult';
import UserListItem from './UserListItem';
import { ModalHeader, ModalContent } from './styles';

const createContent = ({ myId, listName, data, error }) => {
  const spinnerSize = 100;
  if (error) return <div>다시 시도해주세요.</div>;
  if (!data) return <Spinner size={spinnerSize} />;
  const DataKeys = Object.keys(data);
  const list = data[DataKeys[0]];
  if (!list.length) return <NoResult listName={listName} />;
  return list.map(user => (
    <UserListItem userInfo={user} myId={myId} key={user.id} />
  ));
};

const UserListModal = ({ myId, onClick, listName, query, userId }) => {
  const queryOption = {
    variables: { myId, userId },
    fetchPolicy: 'cache-and-network',
  };
  const { data, error } = useQuery(query, queryOption);
  const content = createContent({ myId, listName, data, error });

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
