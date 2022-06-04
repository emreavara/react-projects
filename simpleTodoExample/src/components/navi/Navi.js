import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavLink,
  Nav,
} from "reactstrap";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Avara</NavbarBrand>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem> <NavLink href="/home">Home</NavLink></NavItem>
              <NavItem> <NavLink href="/blog">Blog</NavLink></NavItem>
              <NavItem> <NavLink href="/about">About</NavLink></NavItem>
              <NavItem> <NavLink href="/contact">Contact</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
