import React, { useState } from 'react';
import InputRow from '../../components/InputRow';
import Modal from '../../components/Modal';
import { ModalRow, ModalContentTitle, ModalContent, MyAppInfo } from './styles';

const MyApplication = ({ result }) => {
  const [isVisible, setIsVisible] = useState(false);
  const clickClose = () => {
    setIsVisible(false);
  };
  const openAppInfo = () => {
    setIsVisible(true);
  };
  return (
    <>
      <InputRow
        label={result.appName}
        rightComponent={
          <MyAppInfo onClick={openAppInfo}>
            <p>자세히보기</p>
          </MyAppInfo>
        }
      />
      {isVisible && (
        <Modal style={{ width: '400px' }} onClick={clickClose}>
          <ModalRow>
            <ModalContentTitle>clientId</ModalContentTitle>
            <ModalContent>{result.clientId}</ModalContent>
          </ModalRow>
          <ModalRow>
            <ModalContentTitle>clientSecret</ModalContentTitle>
            <ModalContent>{result.clientSecret}</ModalContent>
          </ModalRow>
          <ModalRow>
            <ModalContentTitle>redirectionURI</ModalContentTitle>
            <ModalContent>{result.redirectionURI}</ModalContent>
          </ModalRow>
        </Modal>
      )}
    </>
  );
};

export default MyApplication;
