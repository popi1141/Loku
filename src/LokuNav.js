import React, {Component }  from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'; //use switch around routes so you don't need if/else statements
import './App.css';

export class LokuNav extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" bg="green">
        <Navbar.Brand href="/">
          <img
          alt="Loku Logo"
          src="/img/minilogo.png"
          width="60"
          height="30"
          className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Select A Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/seattle/food"> Seattle - Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/seattle/crafts">Seattle - Crafts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/seattle/produce"> Seattle - Produce</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tacoma/food"> Tacoma - Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tacoma/crafts">Tacoma - Crafts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/tacoma/produce"> Tacoma - Produce</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LokuNav;
