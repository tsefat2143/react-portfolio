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
import {Link} from 'react-router-dom'
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
              <NavLink as={Link} to='/' style={{ color: "dodgerblue" }}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to='/about' style={{ color: "dodgerblue" }}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to='/skills' style={{ color: "dodgerblue" }}>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to='/work-experience' style={{ color: "dodgerblue" }}>Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/project" style={{ color: "dodgerblue" }}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/contact" style={{ color: "dodgerblue" }}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;