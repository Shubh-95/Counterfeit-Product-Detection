import Web3 from 'web3'
const provider = window.ethereum;
console.log("hello mann")
console.log(provider)
const web3 = new Web3(provider)

const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "Added",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_a",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_b",
                "type": "string"
            }
        ],
        "name": "concat",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_text",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_date",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "p_quality",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "pid",
                "type": "uint256"
            }
        ],
        "name": "newItem",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "info",
                "type": "string"
            }
        ],
        "name": "addState",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_productId",
                "type": "uint256"
            }
        ],
        "name": "searchProduct",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]
const Sc = new web3.eth.Contract(abi, "0x332769Ff81A0e3EB4657F9ef38A81ca7EC12B55C")
export default Sc;

