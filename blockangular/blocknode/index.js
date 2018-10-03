var Web3 = require('web3');
const cors=require('cors');
var express = require('express');
var customer= require('./models/user');
var router = express.Router();
var ethers = require('ethers');
var util = require('ethereumjs-util');
var tx = require('ethereumjs-tx');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils
var providers = require('ethers-providers');
var app=express();
var http=require('http');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors({ origin:'http://localhost:4200' }));
/*
var web3 = new Web3(
    new Web3.providers.HttpProvider('https://rinkeby.infura.io/'),
    console.log("dfjaksdj")
);var bytecode = '6060604052 ...';
//var interface = [{ "constant": false, "inputs": ...;
var address = '0xA6a06Fe8f93ce36bd4EE1289cf19Fc31b0c6d785';
var key = '2be9840bcb23e135287fecd4153074366c78c93b9afe18489de7345474e033f8';
function sendRaw(rawTx) {
    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}
var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)),
    gasLimit: web3.toHex(800000),
    gasPrice: web3.toHex(20000000000),
    data: '0x' + bytecode + '0000000000000000000000000000000000000000000000000000000000000005'
};

function Ballot(uint8_numProposals) {
    chairperson = msg.sender;
    voters[chairperson].weight = 1;
    proposals.length = _numProposals;
}
sendRaw(rawTx); *//*
// we are using .env file for configuration details (i.e., from & to account addresses & the private key for the from address) 
require('dotenv').config()

// we are only using the 'ethers' module for transferring ether programmatically 
const ethers = require('ethers');
//const providers = ethers.providers;

// we are currenly using rinkeby test network; change it to mainnet for real transactions (and improve this code before you do that ;-))
const network = 'rinkeby'; 
const provider = providers.getDefaultProvider(network);

var address = process.env.FROM_ADDRESS

console.log(`Using the given from and to addresses & the private key for the from address for ${network} network`); 

// first retrive the account balance (you cannot transfer if you have no ether or less ether than the transfer amount!) 
const balance = provider.getBalance(address).then(function(balance) {
    var etherString = ethers.utils.formatEther(balance);
    console.log(`The balance in your account is: ${etherString}`);
    return etherString; 
});

const privateKey = process.env.PRIVATE_KEY
const wallet = new ethers.Wallet(privateKey);
wallet.provider = provider; 

// how much ether to transfer 
const amountToTransfer = "0.01"; 

// create a transaction object with the to address and the amount of ether to be transferred 
var transaction = {
    to: process.env.TO_ADDRESS, 
    value: ethers.utils.parseEther(amountToTransfer)
};

// get the current estimate for the amount of Gas required for performing the transaction and set that as the gas limit as well 
const estimateGasPromise = wallet.estimateGas(transaction);

estimateGasPromise.then(function(gasEstimate) {
    console.log(`The estimated gast for performing the transaction is: ${gasEstimate.toString()}`);
    console.log(`Keeping the gas limit also the same: ${gasEstimate.toString()}`);
    transaction.gasLimit = gasEstimate;

    // that's it! do the transaction 
    var sendTransactionPromise = wallet.sendTransaction(transaction);

    // if the transaction succeeds, you'll get here with the transaction hash! 
    sendTransactionPromise.then(function(transactionHash) {
       console.log(`Transaction successful!!! `);
       console.log(`The transaction hash is: ${transactionHash.hash}`);
       // go to this URL to check more details about the transaction 
       console.log(`Etherscan transaction URL for complete details: https://${network}.etherscan.io/tx/${transactionHash.hash}`); 
    });
});  */


const port = 3001
app.post('/add',(req,res)=>{
    //let address="0x1b37d0412acca99222f61d500ac755a8e91db04d";
    //let network='rinkeby'; 
    //customer=new customer
    let address=req.body.address;
    let network=req.body.network;
    const provider = providers.getDefaultProvider(network);
    provider.getBalance(address).then((balance) => {
    let etherString = ethers.utils.formatEther(balance);

    //console.log("Balance: " + etherString);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(etherString);
    return res.end();
    });
})
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/*http.createServer(function (req, res) {
    //var newCustomer = new customer(req.body.data);
    //let address=req.body.address;
    //let network=req.body.network;

    
    //res.json(etherString);
})
}).listen(8080); 

app.get('/san', function (req, res) {
    res.send('hello world')
  })
    /* console.log("added");
    newCustomer.save((err,customer)=>{
      if(err){
          res.send(err);
      }else{
          res.json({message:"user added sucessfully",customer});
      }
    } 
  );*/
  
       

  
/*
let address = "0x1b37d0412acca99222f61d500ac755a8e91db04d";
//let address = "0xEb600D014b5a753A86E93fe169564dfCbf8B870C";
const network = 'rinkeby'; 
const provider = providers.getDefaultProvider(network);
provider.getBalance(address).then((balance) => {

    // balance is a BigNumber (in wei); format is as a sting (in ether)
    let etherString = ethers.utils.formatEther(balance);

    console.log("Balance: " + etherString);
});

/*
provider.getTransactionCount(address).then((transactionCount) => {
    console.log("Total Transactions Ever Sent: " + transactionCount);
});
let transactionHash = "0x594efcf08080e2873ec6ae7697d1631586bcff2632bd81cdd9e25cd711aa7588"

provider.getTransaction(transactionHash).then((transaction) => {
    console.log(transaction);
});
provider.getBlockNumber().then((blockNumber) => {
    console.log("Current block number: " + blockNumber);
}); */
/*let blockHash = "0x0ce4be3617885da7e434e569a375d8316bfa29ddbf6f9bb6f5229c425b450960";
provider.getBlock(blockHash).then((block) => {
    console.log(block);
}); *//*
provider.getGasPrice().then((gasPrice) => {
    // gasPrice is a BigNumber; convert it to a decimal string
    gasPriceString = gasPrice.toString();

    console.log("Current gas price: " + gasPriceString);
});
/*
provider.lookupAddress(address).then(function(address) {
    console.log("Name: " + address);
    // "registrar.firefly.eth"
}); */
