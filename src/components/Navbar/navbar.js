import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navbar-menu' light expand="md" fixed='top'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <a href='/#'>Home</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href='/#about'>About</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href='/#skills'>Skills</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href='/#work-experience'>Experience</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="/#project">Projects</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <a href="/#contact">Contact</a>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;