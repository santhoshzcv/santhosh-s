const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  transactionHash:String,
  date:String,
  from:String,
  to:String,
  ether:String
})

module.exports=mongoose.model('transaction',userSchema,'transactions')