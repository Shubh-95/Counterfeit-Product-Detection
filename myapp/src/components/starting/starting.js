import React from "react";
import "./starting.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from "./navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
import Footer from "./footer";
function Starting() {

    const navigate = useNavigate();
    const logpg = () => {
        navigate("/MLogin")
    };

    const goToRegister = () => {
        navigate("/Mregister");
    }

    return (
        <div>
            <div>
                <Top />
                <div className="cards">
                    <div className="A">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/industry-car-manufacturing-cartoon-engine-assembly-vector-illustration-graphic-design-142366781.jpg" width="100" height="200" />
                            <Card.Body>
                                <Card.Title>Manufacturer</Card.Title>
                                <Card.Text>
                                    Here we build the product"
                                </Card.Text>

                            </Card.Body>
                        </Card >
                    </div>
                    <div className="B">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/cartoon-character-businessman-checking-packagesvector-260nw-1135349225.jpg" width="100" height="200" />
                            <Card.Body>
                                <Card.Title>Supplier</Card.Title>
                                <Card.Text>
                                    "Here we transport the product"
                                </Card.Text>


                            </Card.Body>
                        </Card >
                    </div>
                    <div className="C">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.pinimg.com/736x/f0/59/ca/f059ca85942e5500c4fc870febca3cd4.jpg" width="100" height="200" />
                            <Card.Body>
                                <Card.Title>Consumer</Card.Title>
                                <Card.Text>
                                    we are the buyers
                                </Card.Text>


                            </Card.Body>
                        </Card >
                    </div>
                    <div class="center1">
                        <div className="Lbutton">
                            <Button variant="dark" className="Lbutton" onClick={logpg}>Log In</Button>
                            <Button variant="light" className="Lbutton" onClick={() => goToRegister()}>Sign Up</Button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div >

    )
}
export default Starting