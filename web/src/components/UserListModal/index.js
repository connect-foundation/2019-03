import React, { useRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List, AutoSizer, InfiniteLoader } from 'react-virtualized';

import Modal from '../Modal';
import Spinner from '../Spinner';
import NoResult from './NoResult';
import UserListItem from './UserListItem';
import { ModalHeader, ModalContent } from './styles';
import selectUpdateQuery from './selectUpdateQuery';

const createContent = ({ myId, listName, data, error, requestMoreList }) => {
  const spinnerSize = 100;
  if (error) return <div>다시 시도해주세요.</div>;
  if (!data) return <Spinner size={spinnerSize} />;
  const DataKeys = Object.keys(data);
  const list = data[DataKeys[0]];
  if (!list.length) return <NoResult listName={listName} />;

  function loadMoreRows() {
    let promiseResolver;

    setTimeout(() => {
      requestMoreList(list, promiseResolver);
    }, 500);

    return new Promise(resolve => {
      promiseResolver = resolve;
    });
  }

  function rowRenderer({ key, index, style }) {
    const user = list[index];
    return <UserListItem userInfo={user} myId={myId} key={key} style={style} />;
  }

  return (
    <InfiniteLoader
      isRowLoaded={({ index }) => !!list[index]}
      loadMoreRows={loadMoreRows}
      rowCount={1000000}
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={registerChild}
              onRowsRendered={onRowsRendered}
              width={width}
              height={height}
              rowCount={list.length}
              rowHeight={56}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
};

const UserListModal = ({ myId, onClick, listName, query, userId }) => {
  const queryOption = {
    variables: { myId, userId },
    fetchPolicy: 'cache-and-network',
  };
  const { data, error, fetchMore } = useQuery(query, queryOption);
  const isLoading = useRef(false);
  const isLast = useRef(false);

  const requestMoreList = (list, promiseResolver) => {
    if (isLoading.current) return;
    if (isLast.current) return;
    isLoading.current = true;

    const variables = { myId, userId, cursor: [...list].pop().updatedAt };
    const getUpdateQuery = selectUpdateQuery[listName];

    const updateQuery = getUpdateQuery({
      promiseResolver,
      isLoading,
      isLast,
    });

    fetchMore({ variables, updateQuery });
  };

  const content = createContent({
    myId,
    listName,
    data,
    error,
    requestMoreList,
  });

  return (
    <Modal onClick={onClick}>
      <ModalHeader>
        <h1>{listName}</h1>
      </ModalHeader>
      <ModalContent>{content}</ModalContent>
    </Modal>
  );
};

export default UserListModal;
