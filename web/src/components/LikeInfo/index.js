import React, { useState } from 'react';

import { LikeInfoWrapper, Profile, LikeCount, LikerLink } from './styles';
import LikerListModal from './LikerListModal';

const LikeInfo = ({ myInfo, postId, className, diff, likerInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onToggleModal = () => {
    setIsVisible(!isVisible);
  };

  const {
    likerCount: likerCountBefore,
    username,
    profileImage: imageURL,
  } = likerInfo;

  const likerCount = likerCountBefore + diff;
  if (likerCount === 0) return null;

  const isMany = likerCount >= 2;
  return (
    <LikeInfoWrapper
      className={className}
      style={{
        margin: '4px 15px',
      }}
    >
      <Profile ratio={8} imageURL={imageURL} onClick={onToggleModal} />

      {isMany && (
        <>
          <LikerLink to={`/${username}`}>{username}</LikerLink>님&nbsp;
        </>
      )}
      <LikeCount onClick={onToggleModal}>
        {isMany ? `외 ${likerCount - 1}명` : '좋아요 1개'}
      </LikeCount>
      {isMany && '이 좋아합니다.'}
      {isVisible && <LikerListModal postId={postId} onClick={onToggleModal} />}
    </LikeInfoWrapper>
  );
};

export default LikeInfo;
