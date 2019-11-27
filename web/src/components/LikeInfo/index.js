import React, { useState } from 'react';

import { LikeInfoWrapper, Profile, LikeCount, LikerLink } from './styles';
import LikerListModal from './LikerListModal';
import { useLikerInfoState } from './Context/LikerInfoContext';
import useFetch from '../../useFetch';
import { likerListQuery } from './queries';

const LikeInfo = ({ myInfo, postId, className, style }) => {
  const likerInfo = useLikerInfoState();
  const [isVisible, setIsVisible] = useState(false);
  const [state, dispatch, fetchData] = useFetch(
    likerListQuery(postId),
    true,
    [],
    true,
  );
  const { loading, data, error } = state;

  const onToggleModal = async () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    await fetchData();
    setIsVisible(true);
  };

  const { likerCount, username, profileImage: imgSrc } = likerInfo;
  if (likerCount === 0) return null;

  const isMany = likerCount >= 2;
  const isOther = username !== myInfo.username;

  return (
    <LikeInfoWrapper className={className} style={style}>
      {isOther && <Profile ratio={8} imgSrc={imgSrc} onClick={onToggleModal} />}
      {isMany && (
        <>
          <LikerLink to={username}>{username}</LikerLink>님&nbsp;
        </>
      )}
      <LikeCount onClick={onToggleModal}>
        {isMany ? `외 ${likerCount - 1}명` : '좋아요 1개'}
      </LikeCount>
      {isMany && '이 좋아합니다.'}
      {isVisible && (
        <LikerListModal
          likerList={data && data.likerList}
          onClick={onToggleModal}
        />
      )}
    </LikeInfoWrapper>
  );
};

export default LikeInfo;
