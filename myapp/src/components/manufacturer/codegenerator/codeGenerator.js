import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './codeGenerator.css';
import Sc from "../../../utility/loader";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider'


function CodeGenerator() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");


  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,

  });

  const [account, setAccount] = useState(null);
  const [reload, shouldReload] = useState(false);



  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }
  var today = new Date();
  var thisdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  async function setting() {
    console.log("this is setting");
    const prodid = document.getElementById("pid").value;
    const prodname = document.getElementById("pname").value;
    const qual = document.getElementById("quality").value;
    const recipt = Sc.methods.newItem(prodname, thisdate, qual, prodid).send({ from: account, gas: 2000000 })

    console.log(recipt);

  }

  const reloadEffect = () => shouldReload(!reload);
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
  };
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setAccountListener(provider);
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,

        });
      } else {
        console.error("Please install MetaMask!");
      }

    };

    loadProvider();
  }, []);




  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  return (
    <div className="App">
      <p>QR Code Generator</p>
      <div className="input-box">
        <div className="gen">
          <input type="text" id="pid" className="box" onChange={
            (e) => { setTemp(e.target.value) }}
            placeholder="Enter Product ID" /><br></br>
          <input type="text" id="pname" placeholder="enter the product name"></input><br></br>
          <input type="text" id="quality" placeholder="enter product quality"></input><br></br>

          <button className="button"
            onClick={handleClick}>
            GENERATE QR
          </button>
          <button onClick={setting}>ADD product</button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="100" max="200"
            value={size} onChange={(e) => { setSize(e.target.value) }} />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default CodeGenerator;