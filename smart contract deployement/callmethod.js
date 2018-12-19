
console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const HelloWorldABI = require("./HelloWorldABI.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const tempContract = web3.eth.contract(HelloWorldABI);
var tempContractInstance = tempContract.at("0xb8b353b0d3f858b24a7dced5e65d6123b8072903");
console.log(tempContractInstance.sayHi.call());

