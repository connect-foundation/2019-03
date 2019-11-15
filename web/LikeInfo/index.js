import React, { useState } from 'react';

import defaultImage from '../../images/default_profile.png';

import Wrapper from './Wrapper';
import ProfileImageSpan from './ProfileImageSpan';
import UserLink from './UserLink';
import LikeListButton from './LikeListButton';
import LikeListModal from './LikeListModal';

const getOneUserCase = (id, user, onClickHandler) => {
  if (user.id === id) {
    return (
      <LikeListButton type="button" onClick={onClickHandler}>
        좋아요 1개
      </LikeListButton>
    );
  }

  const imageUrl = user.profileImage ? user.profileImage : defaultImage;
  return (
    <>
      <ProfileImageSpan onClick={onClickHandler} imageUrl={imageUrl} />
      <LikeListButton type="button" onClick={onClickHandler}>
        좋아요 1개
      </LikeListButton>
    </>
  );
};

const getMultipleUserCase = (id, likeList, onClickHandler) => {
  const user = likeList.find(u => u.id !== id);
  const imageUrl = user.profileImage;
  return (
    <>
      <ProfileImageSpan onClick={onClickHandler} imageUrl={imageUrl} />
      <UserLink to={user.username}>{user.username}</UserLink>님{' '}
      <LikeListButton type="button" onClick={onClickHandler}>
        {' '}
        외 {likeList.length - 1}명
      </LikeListButton>
      이 좋아합니다.
    </>
  );
};

const LikeInfo = ({ id, likeList }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showLikeListModalHandler = () => {
    setModalVisible(!modalVisible);
  };

  let infoLayout = null;
  const likeCount = likeList.length;
  if (likeCount === 1)
    infoLayout = getOneUserCase(id, likeList[0], showLikeListModalHandler);
  if (likeCount >= 2)
    infoLayout = getMultipleUserCase(id, likeList, showLikeListModalHandler);

  return (
    <Wrapper>
      {infoLayout}
      <LikeListModal visible={modalVisible} setModalVisible={setModalVisible} />
    </Wrapper>
  );
};

export default LikeInfo;
