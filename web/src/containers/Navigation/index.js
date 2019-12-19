import React from 'react';
import { withCookies } from 'react-cookie';
import Search from './Search';
import Icon from '../../components/Icon';
import ProfileIcon from '../../components/ProfileIcon';
import StyledLink from '../../components/StyledLink';
import Alarm from './Alarm';
import {
  NavBackground,
  NavCenterItemGroup,
  NavItemGroup,
  ItemWrapper,
} from './styles';

const Navigation = ({ cookies }) => {
  const myInfo = cookies.get('myInfo');
  return (
    <>
      <NavBackground>
        <ItemWrapper>
          <NavItemGroup>
            <StyledLink
              to="/"
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Icon name="favicon" style={{ marginRight: '10px' }} />
              <Icon name="logo" />
            </StyledLink>
          </NavItemGroup>
          <NavCenterItemGroup>
            <Search />
          </NavCenterItemGroup>
          <NavItemGroup>
            <StyledLink to="/new/post">
              <Icon name="newPost" style={{ marginRight: '10px' }} />
            </StyledLink>
            <Alarm myInfo={myInfo} />
            <StyledLink to={`/${myInfo.username}`}>
              <ProfileIcon imageURL={myInfo.profileImage} ratio={8} />
            </StyledLink>
          </NavItemGroup>
        </ItemWrapper>
      </NavBackground>
    </>
  );
};

export default withCookies(Navigation);
