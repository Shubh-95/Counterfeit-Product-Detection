import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './manufacturer.css'
import NavM from "./navbar";
import Web3 from "web3";
import Sc from "../../utility/loader";
import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
//const web3 = new Web3("http://localhost:7545");

function Check() {

    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,

    });

    const [account, setAccount] = useState(null);
    const [reload, shouldReload] = useState(false);

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

    async function addstate() {
        const prodid = document.getElementById("pid").value
        const state = document.getElementById("address").value
        const recipt = Sc.methods.addState(prodid, state).send({ from: account, gas: 2000000 })
        console.log("this is setting");
        console.log(recipt);
    }

    return (
        <div>
            <NavM />
            <div className="centerr">
                <div>
                    <input type="text" id="address" placeholder="address"></input><br></br>

                    <input type="number" id="pid" placeholder="product id"></input><br></br>
                    <button onClick={addstate}>Update location</button>
                </div>

            </div>

        </div>



    );
}

export default Check;