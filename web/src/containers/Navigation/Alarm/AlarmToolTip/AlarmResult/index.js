import React from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import StyledLink from '../../../../../components/StyledLink';
import {
  AlarmResultWrapper,
  AlarmContentWrapper,
  AlarmActionWrapper,
  AlarmProfileWrapper,
} from './styles';

const AlarmResult = ({ result, isLast }) => {
  const commonContent = (
    <StyledLink to={`/${result.fromUser.username}`}>
      <b>{result.fromUser.username}</b>
    </StyledLink>
  );

  let content;
  let action;
  switch (result.status) {
    case 1:
      content = (
        <span>{commonContent}님이 회원님을 팔로우하기 시작했습니다.</span>
      );
      action = null; // follow 버튼 삽입 예정
      break;
    case 2:
      content = <span>{commonContent}님이 회원님의 게시물을 좋아합니다.</span>;
      action = (
        <StyledLink to={`/${result.post.postURL}`}>
          <img src={result.post.imageURL} />
        </StyledLink>
      );
      break;
    case 3:
      content = (
        <span>{commonContent}님이 회원님의 게시물에 댓글을 남겼습니다.</span>
      );
      action = (
        <StyledLink to={`/p/${result.post.postURL}`}>
          <img src={result.post.imageURL} />
        </StyledLink>
      );
      break;
    default:
      break;
  }

  return (
    <AlarmResultWrapper isLast={isLast}>
      <AlarmProfileWrapper>
        <StyledLink to={`/${result.fromUser.username}`}>
          <ProfileIcon imgSRc={result.fromUser.profileImage} />
        </StyledLink>
      </AlarmProfileWrapper>
      <AlarmContentWrapper>{content}</AlarmContentWrapper>
      <AlarmActionWrapper>{action}</AlarmActionWrapper>
    </AlarmResultWrapper>
  );
};

export default AlarmResult;
