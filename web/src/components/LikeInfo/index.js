import React, { useState } from 'react';

import {
  LikeInfoWrapper,
  Profile,
  LikeCount,
  LikerLink,
  LikerListModal,
} from './styles';

const LikeInfo = ({ myInfo, likerList, className, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const onToggle = () => {
    setIsVisible(!isVisible);
  };

  const { length } = likerList;
  if (length === 0) return null;

  const isMany = length >= 2;
  const { username, profileImage: imgSrc } = isMany
    ? likerList.find(liker => liker.username !== myInfo.username)
    : likerList[0];
  const isOther = username !== myInfo.username;

  return (
    <LikeInfoWrapper className={className} style={style}>
      {isOther && <Profile ratio={8} imgSrc={imgSrc} onClick={onToggle} />}
      {isMany && (
        <>
          <LikerLink to={username}>{username}</LikerLink>님&nbsp;
        </>
      )}
      <LikeCount onClick={onToggle}>
        {isMany ? `외 ${length - 1}명` : '좋아요 1개'}
      </LikeCount>
      {isMany && '이 좋아합니다.'}
      {isVisible && <LikerListModal likerList={likerList} onClick={onToggle} />}
    </LikeInfoWrapper>
  );
};

export default LikeInfo;
