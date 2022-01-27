import React from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const isLoggedin = this.props.isLoggedin
    console.log(isLoggedin)
    return (
      <Navbar expand="lg">
        <Navbar.Brand >hello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to='/'>Login</Link></Nav.Link>
            <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar