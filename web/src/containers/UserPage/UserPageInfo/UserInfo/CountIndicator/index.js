import React from 'react';

import StyledLink from '../../../../../components/StyledLink';
import CountIndicatorWrapper from './CountIndicatorWrapper';

const CountIndicator = () => {
  return (
    <CountIndicatorWrapper>
      <li>
        <div>
          게시물 <div>0</div>
        </div>
      </li>
      <StyledLink>
        <li>
          <div>
            팔로워 <div>100</div>
          </div>
        </li>
      </StyledLink>
      <StyledLink>
        <li>
          <div>
            팔로우 <div>101</div>
          </div>
        </li>
      </StyledLink>
    </CountIndicatorWrapper>
  );
};

export default CountIndicator;
