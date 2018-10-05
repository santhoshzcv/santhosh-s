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


const port = 3001
app.post('/add',(req,res)=>{
   
    let address=req.body.address;
    let network=req.body.network;
    const provider = providers.getDefaultProvider(network);
    provider.getBalance(address).then((balance) => {
    let etherString = ethers.utils.formatEther(balance);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(etherString);
    return res.end();
    });
})
app.get('/', (req, res) => res.send('Hello World!'))

// we are only using the 'ethers' module for transferring ether programmatically 
//const ethers = require('ethers');
//const providers = ethers.providers;



    // {
    //    // All transaction fields will be present
    //    "nonce", "gasLimit", "pasPrice", "to", "value", "data",
 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//  sending ether from one account to another

let provider = ethers.getDefaultProvider('rinkeby');

//let privateKey = "2be9840bcb23e135287fecd4153074366c78c93b9afe18489de7345474e033f8"
let privateKey="5D97C088400E70B6D3B9E7B6BEFEF385F87BA51B197C07292EF56F4B47C3065A"
let wallet = new ethers.Wallet(privateKey, provider);


let transactionCountPromise = wallet.getTransactionCount();

transactionCountPromise.then((transactionCount) => {
    console.log(transactionCount);
});

let amount = ethers.utils.parseEther('1.0');

let txx = {
    to: "0xA6a06Fe8f93ce36bd4EE1289cf19Fc31b0c6d785",
    // ... or supports ENS names
    // to: "ricmoo.firefly.eth",

    // We must pass in the amount as wei (1 ether = 1e18 wei), so we
    // use this convenience function to convert ether to wei.
    value: ethers.utils.parseEther('1.0')
};

let sendPromise = wallet.sendTransaction(txx);

sendPromise.then((txx) => {
    console.log(txx);
    // {
    //    // All transaction fields will be present
    //    "nonce", "gasLimit", "pasPrice", "to", "value", "data",
    //    "from", "hash", "r", "s", "v"
    // }
}); 
let address ="0x1b37d0412acca99222f61d500ac755a8e91db04d";
provider.getBalance(address).then((balance) => {
    let etherString = ethers.utils.formatEther(balance);
        console.log(etherString);
});





//web3.eth.accounts.create([entropy]);
//Web3.eth.accounts.create();








var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.personal.newAccount('mynewaccount', function(err, res){

    console.log("error: "+err);
    console.log("res: "+res);

});


var Web3 = require('web3'); // use the given Provider, e.g in Mist, or instantiate a new websocket provider 
var web3 = new Web3(Web3.givenProvider || 'http://localhost:8546'); 
console.log(web3.givenProvider);
// or var web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://remotenode.com:8546'));












  
