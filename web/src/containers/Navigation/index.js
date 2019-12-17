import React from 'react';
import Search from './Search';
import Icon from '../../components/Icon';
import ProfileIcon from '../../components/ProfileIcon';
import StyledLink from '../../components/StyledLink';
import Alarm from './Alarm';
import { NavBackground, NavItemGroup } from './styles';

const Navigation = ({ myInfo }) => {
  return (
    <>
      <NavBackground>
        <NavItemGroup>
          <StyledLink
            to="/"
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Icon name="favicon" />
            <Icon name="logo" />
          </StyledLink>
        </NavItemGroup>
        <NavItemGroup>
          <Search />
        </NavItemGroup>
        <NavItemGroup>
          <StyledLink to="/new/post">
            <Icon name="newPost" />
          </StyledLink>
          <Alarm myInfo={myInfo} />
          <StyledLink to={`/${myInfo.username}`}>
            <ProfileIcon imageURL={myInfo.profileImage} ratio={8} />
          </StyledLink>
        </NavItemGroup>
      </NavBackground>
    </>
  );
};

export default Navigation;
