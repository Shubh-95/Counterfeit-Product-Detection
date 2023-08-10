import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
function NavM() {
  const history = useNavigate();
  const goToHome = () => {
    history("/");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><b>FakeCheck</b></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className=" right">
            <Nav.Link href="/SScan">Check Product</Nav.Link>
            <Nav.Link href="/Supplier">Update Location</Nav.Link>
            <Button variant="dark" onClick={() => goToHome()}>logout</Button>
          </Nav>
          <Navbar.Text>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavM;
