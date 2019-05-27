import React from 'react';
import styled from 'styled-components';
import sauceIcon from '../sauce.png';
import {
  Navbar,
  Container,
  H3,
  Nav,
  NavItem,
  NavbarBrand,
} from '@bootstrap-styled/v4';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar color="faded" light toggleable="lg">
        <Container>
          <div className="d-flex justify-content-between">
            <Link to="/">
              <Image size="small" alt="sauce" src={sauceIcon} />
            </Link>
          </div>

          <Nav navbar className="mr-auto">
            <NavItem>
              <NavbarBrand href="/">Home</NavbarBrand>
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
