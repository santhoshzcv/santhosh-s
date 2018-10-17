const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const mongoose = require('mongoose')
const db = "mongodb://santhosh123:santhosh123@ds133533.mlab.com:33533/eventsdb"

mongoose.connect(db, { useNewUrlParser: true },err=>{
 if(err){
     console.log("the error" +err)
 }else{
     console.log("connected to mongodb")
 }

})
router.get('/data',(req,res)=>{
    res.send("this is Api route")
})
router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData)
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
router.post('/login',(req,res)=>{
    let userData = req.body;
    User.findOne({email:userData.email},(error,user)=>{
        if(error){
           console.log(error)
        }else{
            if(!user){
                res.status(401).send("invalid email")
            }else if(user.password !== userData.password){
                res.status(401).send("invalid password")
            }else{
                let payload = { subject:user._id} 
                let token = jwt.sign(payload,'secretkey')
                res.status(200).send({token})
              
            }
        }
    })
})


module.exports = router