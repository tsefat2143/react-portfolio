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
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to='/'>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/about'>About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/skills'>Skills</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/work-experience'>Experience</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/project">Projects</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/contact">Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;