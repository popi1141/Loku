import React, { useState, Fragment, Component }  from 'react';
import { Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import './App.css';
export class LokuNav extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" bg="green">
        <Navbar.Brand href="#home">
          <img
          alt=""
          src="img/minilogo.png"
          width="60"
          height="30"
          className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Seattle" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Seattle</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Tacoma</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Food" id="basic-nav-dropdown">
              <NavDropdown.Item href="seattle/food">Food</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="seattle/crafts">Crafts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="seattle/produce">Produce</NavDropdown.Item>
            </NavDropdown>
            <Button variant="light">Search</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LokuNav;