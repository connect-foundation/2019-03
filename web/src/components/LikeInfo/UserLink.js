import React from 'react';
import styled from 'styled-components';
import StyledLink from '../StyledLink';

const UserLink = styled(StyledLink)`
  line-height: 25px;
  font-weight: 600;
`;

export default props => <UserLink {...props} />;
