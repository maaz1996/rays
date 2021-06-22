import React from "react"
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
//import '../components/style/header.style.css'

function Header() {
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="main1">
        <Navbar.Brand href="#home">Ray's</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            
            <NavDropdown title="Product" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Product1 action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contact Us</Nav.Link>
          </Nav>
          
            
        
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Header;