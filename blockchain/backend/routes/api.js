const express = require('express')

const Web3=require('web3');
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Admin = require('../models/admin')
const Account = require('../models/account')
const mongoose = require('mongoose')
const db = "mongodb://santhosh123:santhosh123@ds133533.mlab.com:33533/eventsdb"

mongoose.connect(db, { useNewUrlParser: true },err=>{
 if(err){
     console.log("the error" +err)
 }else{
     console.log("connected to mongodb")
 }

})

const web3= new Web3();
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'))

router.get('/data',(req,res)=>{
    res.send("this is Api route")
})
// api for user registeration
router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData)
    User.findOne({email:userData.email},(error,user)=>{
    if(error){
        console.log(error)
    } 
    else if(user){
        res.status(200).send( {message:'you have been already registered'});
    }
    else{
        register();
    }
})
function register(){
    if(userData.isadmin===undefined){
        user.isadmin='no'
        }
        console.log(user);
    user.save((err,user)=>{
    if(err){
        res.send("not saved")
    }else{
        let payload = { subject:user._id} 
        let token = jwt.sign(payload,'secretkey')
        res.status(200).send({token,message1:user.isadmin})
    }
})
}
})
// api for admin registration
router.post('/adminregister',(req,res)=>{
    let userData = req.body;
    let user = new Admin(userData)
    user.save((err,user)=>{
        if(err){
            res.send("not saved")
        }else{
            let payload = { subject:user._id} 
            let token = jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
    })
})
// api for user login
router.post('/login',(req,res)=>{
    let userData = req.body;
    User.findOne({email:userData.email},(error,user)=>{
        if(error){
           console.log(error)
        }else{
            if(!user){
                res.status(401).send({message:"invalid email"})
            }else if(user.password !== userData.password){
                res.status(401).send({message:"invalid password"})
            }else{
                let payload = { subject:user._id} 
                let token = jwt.sign(payload,'secretkey')
                res.status(200).send({token,message:user.isadmin})
              
            }
        }
    })
})
// api for admin login
router.post('/adminlogin',(req,res)=>{
    let admindata = req.body;
    Admin.findOne({email: admindata.email},(error,user)=>{
        if(error){
           console.log(error)
        }else{
            if(!user){
                res.status(401).send({message:"invalid email"})
            }else if(user.password !== admindata.password){
                res.status(401).send({message:"invalid password"})
            }else{
                let payload = { subject:user._id} 
                let token = jwt.sign(payload,'secretkey')
                res.status(200).send({token})
              
            }
        }
    })
})
//api for creating an account

router.post('/accounts',(req,res)=>{
    let userData = req.body;
    //console.log(userData);
    let user1 = new Account(userData)
    //console.log(user1);

     web3.eth.personal.newAccount(userData.password).then((result)=>{
         user1.address=result;  
         console.log(user1.address)  
         user1.save((err,user)=>{
             if(err){
                 res.send("not saved")
             }else{
                 res.status(200).send(user)
             }
         })
    
     })
})
///api for checking the balance
router.post('/balance',(req,res)=>{
    let userData = req.body;
    Account.findOne({name:userData.name},(error,user)=>{
     if(error){
         console.log(error)
     }
     else{ 
      if(!user){
         res.status(200).send({message:"user not found"})
     }else {
        web3.eth.getBalance(user.address).then((balance) => {
            balance= web3.utils.fromWei(balance, 'ether')
         res.status(200).send(balance);
        })
     }
    }
    })  
})
// api for trasactions
router.post('/transaction',(req,res)=>{
    let userData = req.body;
    console.log(userData);
    web3.eth.personal.unlockAccount(userData.faddress,userData.password)
    .then((response) => {
        console.log(response);
        res.status(200).send("transaction pending");
        web3.eth.sendTransaction({
            from:userData.faddress,
            to: userData.taddress,
            value: Web3.utils.toWei(userData.ether, 'ether')
         }).then((receipt)=>{
            console.log(receipt)
            
         })

    }).catch((error) => {
        console.log(error);
   });
    
})
//api for list accounts
router.get('/list',(req,res)=>{
    web3.eth.getAccounts((err,res1)=>{
        res.status(200).send(res1);
})
})
// web3.eth.personal.newAccount("810").then((result)=>{
// console.log(result);
// })

module.exports = router