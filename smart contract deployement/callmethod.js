
console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const HelloWorldABI = require("./HelloWorldABI.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const tempContract = web3.eth.contract(HelloWorldABI);
var tempContractInstance = tempContract.at("0xd39f3ed3c92c4e537dece194cac5787c7dd88e55");
console.log(tempContractInstance.sayHi.call());

