import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
const Header = () => {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"><h1>Online Class</h1></Navbar.Brand>
      <Nav className="mr-auto ">
        <Nav.Link href="#home" className="text-white"><h5>About</h5></Nav.Link>
        <Nav.Link href="#features" className="text-white"> <h5>Courses</h5></Nav.Link>
        <Nav.Link href="#pricing" className="text-white"><h5>Contact</h5></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
    );
};

export default Header;