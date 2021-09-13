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
              <NavLink style={{ color: "dodgerblue" }}>
                <Link to='/'>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "dodgerblue" }}>
                <Link to='/about'>About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/skills" style={{ color: "dodgerblue" }}>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/work-experience" style={{ color: "dodgerblue" }}>Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/project" style={{ color: "dodgerblue" }}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" style={{ color: "dodgerblue" }}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;