import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
import './consumer.jpg'
import Login from "../login";
function Template(props) {

    const navigate = useNavigate();
    const logpg = () => {
        navigate("/MLogin")
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.url} width="100" height="200" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <div className="Cbutton">
                    <Button variant="dark" className="Cbutton" onClick={logpg} > {props.button}</Button>
                </div>

            </Card.Body>
        </Card >
    );
}

export default Template;