import React from 'react';
import styled from 'styled-components';

import ItemWrapper from './ItemWrapper';
import Link from '../../../../components/StyledLink';

const StyledLink = styled(Link)`
  padding: 16px 16px 16px 30px;
  display: block;
`;

function Item({ url, title, isFocused }) {
  return (
    <ItemWrapper isFocused={isFocused}>
      <StyledLink to={url}>{title}</StyledLink>
    </ItemWrapper>
  );
}

export default Item;
