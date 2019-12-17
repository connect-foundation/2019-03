import React from 'react';

import StyledLink from '../../../../../components/StyledLink';
import CountIndicatorWrapper from './CountIndicatorWrapper';

const CountIndicator = ({ data }) => {
  return (
    <CountIndicatorWrapper>
      <li>
        <div>
          게시물 <div>{data.postNumber}</div>
        </div>
      </li>
      <StyledLink>
        <li>
          <div>
            팔로워 <div>{data.followersNum}</div>
          </div>
        </li>
      </StyledLink>
      <StyledLink>
        <li>
          <div>
            팔로우 <div>{data.followsNum}</div>
          </div>
        </li>
      </StyledLink>
    </CountIndicatorWrapper>
  );
};

export default CountIndicator;
