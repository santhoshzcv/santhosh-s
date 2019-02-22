
console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const HelloWorldABI = require("./HelloWorldABI.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const tempContract = web3.eth.contract(HelloWorldABI);
var tempContractInstance = tempContract.at(" 0xb2dcc61881bb65124974125bb888c575553d16a0");
console.log(tempContractInstance.Hi);

