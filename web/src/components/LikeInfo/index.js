import React, { useState } from 'react';

import { LikeInfoWrapper, Profile, LikeCount, LikerLink } from './styles';
import LikerListModal from './LikerListModal';
import { useLikerInfoState } from './Context/LikerInfoContext';
import { useFetch } from '../../hooks';
import { likerListQuery } from './queries';

const LikeInfo = ({ myInfo, postId, className, style }) => {
  const likerInfo = useLikerInfoState();
  const [isVisible, setIsVisible] = useState(false);
  const { state, fetchData } = useFetch();
  const { data } = state;

  const onToggleModal = async () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }
    await fetchData(likerListQuery(postId));
    setIsVisible(true);
  };

  const { likerCount, username, profileImage: imageURL } = likerInfo;
  if (likerCount === 0) return null;

  const isMany = likerCount >= 2;
  const isOther = username !== myInfo.username;

  return (
    <LikeInfoWrapper className={className} style={style}>
      {isOther && (
        <Profile ratio={8} imageURL={imageURL} onClick={onToggleModal} />
      )}
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
