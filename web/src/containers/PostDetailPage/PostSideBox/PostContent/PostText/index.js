import React from 'react';

import { PostTextWrapper, ProfileWrapper } from './styles';
import ProfileIcon from '../../../../../components/ProfileIcon';
import Content from './Content';

const PostText = ({ post }) => {
  return (
    <PostTextWrapper>
      <ProfileWrapper>
        <ProfileIcon />
      </ProfileWrapper>
      <Content post={post} />
    </PostTextWrapper>
  );
};

export default PostText;
