const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
    if (err) console.log("could not connect");
    else console.log("connection success");
});
const user = require('./routers/router');//ctrl space for suggestion


app.get('/', (req, res) => {
    res.send("WELCOME TO NODE");
});
app.use('/users', user);

PORT = process.env.PORT;
app.listen(PORT, () => console.log(`AT ${PORT} port is runnin!`));