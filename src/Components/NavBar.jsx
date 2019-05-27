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
            <NavbarBrand to="/">
              <Image size="small" alt="sauce" src={sauceIcon} />
            </NavbarBrand>
          </div>

          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;

const Image = styled.img`
  width: 35px;
  height: 35px;
`;
