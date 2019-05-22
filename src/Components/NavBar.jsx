import React from 'react';
import styled from 'styled-components';
import sauceIcon from '../sauce.png';
import {
  A,
  Form,
  Input,
  Button,
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from '@bootstrap-styled/v4';

const NavBar = ({ links, ...props }) => {
  return (
    <>
      <Navbar color="faded" light toggleable="lg">
        <Container>
          <div className="d-flex justify-content-between">
            <Nav navbar className="mr-auto">
              <NavItem>
                <NavLink>Recipes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Add Recipe</NavLink>
              </NavItem>
              <NavItem>
                Hello, <strong>User@RecipeBoss.com</strong>
              </NavItem>
            </Nav>
            {/* <Header>
              <HeaderMenu>
                <HeaderItem>
                  <Icon size="small" alt="sauce" src={sauceIcon} />
                </HeaderItem>
                <HeaderItem>Recipes</HeaderItem>
                <HeaderItem>
                  Hello, <strong>User@RecipeBoss.com</strong>
                </HeaderItem>
              </HeaderMenu>
            </Header> */}
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;

NavBar.displayName = 'NavBar';

const Header = styled.header`
  background-color: #f8f8f8;
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
