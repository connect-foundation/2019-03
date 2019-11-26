import React from 'react';
import ProfileIcon from '../../../../../components/ProfileIcon';
import AlarmResultWrapper from './AlarmResultWrapper';
import AlarmContentWrapper from './AlarmContentWrapper';
import AlarmActionWrapper from './AlarmActionWrapper';
import AlarmProfileWrapper from './AlarmProfileWrapper';

const AlarmResult = ({ result }) => {
  let content;
  let action;
  switch (result.status) {
    case 1:
      content = (
        <span>
          <b>{result.fromUser.username}</b>님이 회원님을 팔로우하기
          시작했습니다.
        </span>
      );
      action = null; // follow 버튼 삽입 예정
      break;
    case 2:
      content = (
        <span>
          <b>{result.fromUser.username}</b>님이 회원님의 게시물을 좋아합니다.
        </span>
      );
      action = <img src={result.post.imageURL} />;
      break;
    case 3:
      content = (
        <span>
          <b>{result.fromUser.username}</b>님이 댓글을 남겼습니다.
        </span>
      );
      action = <img src={result.post.imageURL} />;
      break;
    default:
      break;
  }

  return (
    <AlarmResultWrapper>
      <AlarmProfileWrapper>
        <ProfileIcon imgSRc={result.fromUser.profileImage} />
      </AlarmProfileWrapper>
      <AlarmContentWrapper>{content}</AlarmContentWrapper>
      <AlarmActionWrapper>{action}</AlarmActionWrapper>
    </AlarmResultWrapper>
  );
};

export default AlarmResult;
