import React from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import StyledLink from '../../../../../components/StyledLink';
import {
  AlarmResultWrapper,
  AlarmContentWrapper,
  AlarmActionWrapper,
  AlarmProfileWrapper,
  AlarmFollowButton,
} from './styles';

const AlarmResult = ({ result, isLast, clickClose }) => {
  const commonContent = (
    <StyledLink to={`/${result.fromUser.username}`} onClick={clickClose}>
      <b>{result.fromUser.username}</b>
    </StyledLink>
  );
  let action = (
    <StyledLink to={`/p/${result.post.postURL}`}>
      <img src={result.post.imageURL} alt="none" />
    </StyledLink>
  );

  let content;
  switch (result.status) {
    case 'follow':
      content = (
        <span>{commonContent}님이 회원님을 팔로우하기 시작했습니다.</span>
      );
      action = (
        <AlarmFollowButton followStatus={result.fromUser.follow.status} />
      );
      break;
    case 'like':
      content = <span>{commonContent}님이 회원님의 게시물을 좋아합니다.</span>;
      break;
    case 'comment':
      content = (
        <span>{commonContent}님이 회원님의 게시물에 댓글을 남겼습니다.</span>
      );
      break;
    default:
      break;
  }

  return (
    <AlarmResultWrapper isLast={isLast}>
      <AlarmProfileWrapper>
        <StyledLink to={`/${result.fromUser.username}`} onClick={clickClose}>
          <ProfileIcon imgSRc={result.fromUser.profileImage} />
        </StyledLink>
      </AlarmProfileWrapper>
      <AlarmContentWrapper>{content}</AlarmContentWrapper>
      <AlarmActionWrapper onClick={clickClose}>{action}</AlarmActionWrapper>
    </AlarmResultWrapper>
  );
};

export default AlarmResult;
