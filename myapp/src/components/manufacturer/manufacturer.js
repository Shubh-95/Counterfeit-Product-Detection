import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './manufacturer.css'
import NavM from "./navbar";
import CodeGenerator from "./codegenerator/codeGenerator";
import Web3 from "web3";

const web3 = new Web3("http://localhost:7545");
var today = new Date();
//var thisdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

function Manufacturer() {

  web3.eth.getBlock("latest", false, (error, result) => {
    console.log(result.gasLimit)

  });

  return (
    <div>
      <NavM />
      <div className="centerr">
        <CodeGenerator />
      </div>

    </div>

  );
}

export default Manufacturer;