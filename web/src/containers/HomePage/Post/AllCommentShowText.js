import React from 'react';
import styled from 'styled-components';

import StyledLink from '../../../components/StyledLink';

const AllCommentShowTextSpan = styled.span`
  margin-left: 15px;
  margin-bottom: 10px;
  padding: 0px;

  line-height: 1;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.gray_font};
`;

const AllCommentShowText = ({ postURL, commentCount }) => {
  return (
    <StyledLink to={`/p/${postURL}`}>
      <AllCommentShowTextSpan>
        댓글 {commentCount}개 모두 보기
      </AllCommentShowTextSpan>
    </StyledLink>
  );
};

export default AllCommentShowText;
