import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './consumer.css'
import NavM from "./navbar";
import Scan from "./scanproduct";

//import Container from 'react-bootstrap/Container';


function Consumer() {


  return (
    <div>
      <NavM />
      <Scan />
    </div>

  );
}

export default Consumer;