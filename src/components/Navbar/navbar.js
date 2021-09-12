import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
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
              <Link to='/' style={{ color: "dodgerblue" }}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/about' style={{ color: "dodgerblue" }}>About</Link>
            </NavItem>
            <NavItem>
              <Link to='/skills' style={{ color: "dodgerblue" }}>Skills</Link>
            </NavItem>
            <NavItem>
              <Link to='/work-experience' style={{ color: "dodgerblue" }}>Experience</Link>
            </NavItem>
            <NavItem>
              <Link to="/project" style={{ color: "dodgerblue" }}>Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" style={{ color: "dodgerblue" }}>Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;