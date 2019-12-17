import React from 'react';
import styled from 'styled-components';

const PostMiddleWrapperDiv = styled.div``;

const PostMiddleWrapper = props => {
  const { children, ...rest } = props;
  return <PostMiddleWrapperDiv {...rest}>{children}</PostMiddleWrapperDiv>;
};

export default PostMiddleWrapper;
