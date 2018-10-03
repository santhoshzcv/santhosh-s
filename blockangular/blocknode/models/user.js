let mongoose = require('mongoose');
let Customer = new mongoose.Schema(
    {
         network : { type :String, required:true},
         address : { type :String, required:true}   
    }
);
module.exports = mongoose.model('customer', Customer);
