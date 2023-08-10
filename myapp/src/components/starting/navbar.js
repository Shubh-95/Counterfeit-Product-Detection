import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
function Top() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">FakeCheck</Navbar.Brand>
                    <Nav className=" left"  >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />



        </div >
    );
}

export default Top;