import React from 'react';
import Search from './Search';
import Icon from '../../components/Icon';
import ProfileIcon from '../../components/ProfileIcon';
import StyledLink from '../../components/StyledLink';
import { NavBackground, NavItemGroup } from './styles';

const Navigation = ({ myInfo }) => {
  return (
    <>
      <NavBackground>
        <NavItemGroup>
          <StyledLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Icon ratio={6} posX={0} posY={-505} />
            <Icon
              ratio={6}
              posX={0}
              posY={0}
              style={{ width: '170px', height: '39px', marginTop: '18px' }}
            />
          </StyledLink>
        </NavItemGroup>
        <NavItemGroup>
          <Search />
        </NavItemGroup>
        <NavItemGroup>
          <StyledLink to="/nowpost">
            <Icon ratio={5} posX={-260} posY={-245} />
          </StyledLink>
          <Icon
            ratio={6}
            posX={-130}
            posY={-246}
            style={{ marginTop: '1px' }}
          />
          <Icon
            ratio={5}
            posX={-130}
            posY={-500}
            style={{ marginTop: '7px' }}
          />
          <StyledLink to={`/${myInfo.username}`}>
            <ProfileIcon ratio={8} />
          </StyledLink>
        </NavItemGroup>
      </NavBackground>
    </>
  );
};

export default Navigation;
