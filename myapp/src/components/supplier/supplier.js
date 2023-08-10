import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './supplier.css'
import NavM from "./navbar";
import Address from "./Address";
import Web3 from "web3";
import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
//import Container from 'react-bootstrap/Container';


function Supplier() {
  // const [temp, setTemp] = useState("");
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

  // function handleClick() {
  //   setWord(temp);
  // }
  var today = new Date();
  //var thisdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  // async function setting() {

  //   const prodid = document.getElementById("pid").value;
  //   const prodname = document.getElementById("pname").value;
  //   const recipt = Sc.methods.newItem(prodname, thisdate, prodid).send({ from: account, gas: 2000000 })
  //   console.log("this is setting");
  //   console.log(recipt);

  // }

  //const reloadEffect = () => shouldReload(!reload);
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





  return (
    <div>
      <NavM />
      <Address />

    </div>



  );
}

export default Supplier;