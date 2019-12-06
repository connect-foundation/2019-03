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
          <StyledLink to="/new/post">
            <Icon
              ratio={5.5}
              posX={-260}
              posY={-245}
              style={{ marginTop: '6px' }}
            />
          </StyledLink>
          <Alarm myInfo={myInfo} />
          <Icon
            ratio={5}
            posX={-130}
            posY={-500}
            style={{ marginTop: '7px' }}
          />
          <StyledLink to={`/${myInfo.username}`}>
            <ProfileIcon imageURL={myInfo.profileImage} ratio={8} />
          </StyledLink>
        </NavItemGroup>
      </NavBackground>
    </>
  );
};

export default Navigation;
