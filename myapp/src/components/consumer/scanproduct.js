import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scan.css'
import Sc from "../../utility/loader";
import { useEffect, useState } from "react";
//import detectEthereumProvider from "@metamask/detect-provider";
import { makeStyles } from '@material-ui/core';
import QrReader from 'react-qr-reader-es6';
import { useRef } from "react";
function Scan() {

    // const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    // const classes = useStyles();
    const qrRef = useRef(null);

    // function show() {
    //     document.getElementById("container").style.height = "400px"
    //     document.getElementById("container").style.display = "block"
    //     document.getElementById("show").style.display = "none"
    // }

    // function hide() {
    //     document.getElementById("container").style.height = "0px"
    //     document.getElementById("container").style.display = "none"
    //     document.getElementById("show").style.display = "inline"
    //     document.getElementById("qr").isDisabled = true;
    // }

    // const handleErrorFile = (error) => {
    //     console.log(error);
    // }
    // const handleScanFile = (result) => {
    //     if (result) {
    //         setScanResultFile(result);
    //     }
    // }
    // const onScanFile = () => {
    //     qrRef.current.openImageDialog();
    // }
    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }
    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,

    });
    const [account, setAccount] = useState(null);
    const [reload, shouldReload] = useState(false);

    // const reloadEffect = () => shouldReload(!reload);
    // const setAccountListener = (provider) => {
    //     provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
    // };
    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3Api.web3.eth.getAccounts();
            setAccount(accounts[0]);
        };
        web3Api.web3 && getAccount();
    }, [web3Api.web3]);

    async function prod() {
        const data = document.getElementById("pid").value
        const result = await Sc.methods.searchProduct(data).call({ from: account, gas: 2000000000 })
        console.log(result)
        document.getElementById("ddd").innerHTML = result
        console.log(data)
    }

    return (
        <div>
            <div>
                <div >
                    <div className="centerr">
                        <QrReader scanDelay={15}
                            delay={300}
                            style={{ width: '20%' }}
                            onError={handleErrorWebCam}
                            onScan={handleScanWebCam}
                        />
                    </div>
                    <br>
                    </br>
                    <div style={{
                        justifyContent: "center", display: "flex"
                    }}>

                        <input type="number" id="pid" placeholder="Scanned id" value={scanResultWebCam}  >
                        </input>
                        <button onClick={prod}>search</button>

                    </div>

                </div>

            </div >

            <p style={{
                justifyContent: "center", display: "flex"
            }} id="ddd"></p>

        </div >



    );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#3f51b5',
        color: '#fff',
        padding: 20
    },
    btn: {
        marginTop: 10,
        marginBottom: 20
    }
}));

export default Scan;