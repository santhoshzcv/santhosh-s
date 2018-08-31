const express = require('express');
const router = express.Router();
const userModel=require('../model/model');


// console.log(userModel);
module.exports = router;
//POST
router.post('/add',(req,res)=>{
    // res.send('post is working');
    if(req.body.data){
        const user=userModel({
            id: req.body.data.id,
            name:req.body.data.name,
            age:req.body.data.age,
            country:req.body.data.country
        });
        user.save((err,result)=>{
            if(err){
                res.status(500).send({
                    success:false,
                    message:err.message
                });
            }else if(result){
                res.status(300).send({
                    success:true,
                    message:"data added sucessfully",
                    result
                });
            }
        });
    }else{
        res.status(400).send({
            message:'please enter any data'
        });
    }

});
//GET
router.get('/:id',(req,res)=>{
    res.send('get is working');
});
//UPDATE
router.patch('/:id',(req,res)=>{
    res.send('patch is working');
});
//DELETE
router.delete('/:id',(req,res)=>{
    res.send('delete is working');
});