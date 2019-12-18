import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

import { ModalContent, StyledLink, Modal, FollowCancelContent } from './styles';
import { DELETE_POST, FOLLOWING_POST_LIST } from '../../../queries';
import CustomFollowButton from './styles/CustomFollowButton';

const MoreModal = ({ isVisible, setIsVisible, writer, myInfo, postURL }) => {
  const [redirect, setRedirect] = useState(false);
  const [deletePost] = useMutation(DELETE_POST, {
    update(cache, { data: { deletePost: deletedPost } }) {
      const { followingPostList } = cache.readQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
      });
      cache.writeQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
        data: {
          followingPostList: followingPostList.filter(
            post => post.postURL !== deletedPost.postURL,
          ),
        },
      });
    },
  });

  const clickClose = () => {
    setIsVisible(false);
  };

  const clickDeletePost = () => {
    deletePost({ variables: { postURL } });
    clickClose();
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/" />;
  if (!isVisible) return null;
  return (
    <Modal onClick={clickClose}>
      {writer.username !== myInfo.username && writer.isFollow === 0 && (
        <ModalContent>
          <FollowCancelContent htmlFor="follow_cancel">
            팔로우 취소
          </FollowCancelContent>
          <CustomFollowButton
            id="follow_cancel"
            followStatus={writer.isFollow}
            username={writer.username}
            myId={myInfo.id}
            userId={writer.id}
            onFollowCancel={clickClose}
          />
        </ModalContent>
      )}
      {writer.username === myInfo.username && (
        <>
          <StyledLink to={`/edit/${postURL}`}>
            <ModalContent>게시물 수정</ModalContent>
          </StyledLink>
          <ModalContent onClick={clickDeletePost}>게시물 삭제</ModalContent>
        </>
      )}
      <StyledLink to={`/p/${postURL}`}>
        <ModalContent>게시물로 이동</ModalContent>
      </StyledLink>
      <CopyToClipboard text={`${process.env.REACT_APP_WEB_URL}/p/${postURL}`}>
        <ModalContent>링크 복사하기</ModalContent>
      </CopyToClipboard>
      <ModalContent cancel onClick={clickClose}>
        취소
      </ModalContent>
    </Modal>
  );
};

export default MoreModal;
