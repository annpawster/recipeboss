import React from 'react';
import styled from 'styled-components';
import sauceIcon from '../sauce.png';

const NavBar = ({ links, ...props }) => {
  return (
    <Navigation>
      <Header>
        <HeaderMenu>
          <HeaderItem>
            <Icon size="small" alt="sauce" src={sauceIcon} />
          </HeaderItem>
          <HeaderItem>Recipes</HeaderItem>
          <HeaderItem>
            Hello, <strong>User@RecipeBoss.com</strong>
          </HeaderItem>
        </HeaderMenu>
      </Header>
    </Navigation>
  );
};
export default NavBar;

NavBar.displayName = 'NavBar';

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 100;
`;

const Header = styled.header`
  background-color: #c0c0c0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-radius: 2px;
`;
const HeaderMenu = styled.ul`
  margin-top: 0px;
  align-items: center;
  display: flex;
  > li:last-child {
    margin-left: auto;
  }
`;
const HeaderItem = styled.li`
  padding: 0 10px 0 10px;
  text-align: center;
  margin: 10px;
  box-sizing: border-box;
  list-style-type: none;
`;
const Icon = styled.img`
  height: 24px;
  width: 24px;
  object-fit: cover;
  border-radius: 50%;
`;
