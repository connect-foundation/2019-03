import React, { useState } from 'react';

import { LikeInfoWrapper, Profile, LikeCount, LikerLink } from './styles';
import LikerListModal from './LikerListModal';
import { useLikerInfoState } from './Context/LikerInfoContext';

const LikeInfo = ({ myInfo, className, style }) => {
  const likerInfo = useLikerInfoState();
  const [isVisible, setIsVisible] = useState(false);
  const onToggle = () => {
    setIsVisible(!isVisible);
  };

  const { likerCount, username, profileImage: imgSrc } = likerInfo;
  if (likerCount === 0) return null;

  const isMany = likerCount >= 2;
  const isOther = username !== myInfo.username;
  // const { username, profileImage: imgSrc } = isMany
  //   ? likerInfo.find(liker => liker.username !== myInfo.username)
  //   : likerInfo[0];

  return (
    <LikeInfoWrapper className={className} style={style}>
      {isOther && <Profile ratio={8} imgSrc={imgSrc} onClick={onToggle} />}
      {isMany && (
        <>
          <LikerLink to={username}>{username}</LikerLink>님&nbsp;
        </>
      )}
      <LikeCount onClick={onToggle}>
        {isMany ? `외 ${likerCount - 1}명` : '좋아요 1개'}
      </LikeCount>
      {isMany && '이 좋아합니다.'}
      {isVisible && <LikerListModal onClick={onToggle} />}
    </LikeInfoWrapper>
  );
};

export default LikeInfo;
