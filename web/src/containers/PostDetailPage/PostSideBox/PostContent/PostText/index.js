import React from 'react';

import { PostTextWrapper, ProfileWrapper } from './styles';
import ProfileIcon from '../../../../../components/ProfileIcon';
import Content from './Content';

const PostText = ({ post }) => (
  <PostTextWrapper>
    <ProfileWrapper>
      <ProfileIcon imageURL={post.writer.profileImage} />
    </ProfileWrapper>
    <Content post={post} />
  </PostTextWrapper>
);
export default PostText;
